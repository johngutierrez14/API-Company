import getPool from "../database";
import Product from "../models/Products";

const connection = getPool();

export const createProduct = async (req, res) => {
  try {
    const { name, category, price, imgURL } = req.body;
    const newProduct = new Product(name, category, price, imgURL);

    if (!name || !category || !price || name.trim() === "" || category.trim() === "" || price.trim() === "") {
      res.status(400).json({ message: "Bad Request. Please fill all fields." });
    }

    await connection.query(
      "INSERT INTO products (name, category, price, imgURL, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?)",
      [
        newProduct.name,
        newProduct.category,
        newProduct.price,
        newProduct.imgURL,
        newProduct.createdAt,
        newProduct.updatedAt,
      ]
    );
    res.status(201).send("Product registered correctly");
  } catch (error) {
    console.error("Error creating product: ", error);
    res.status(500).send("Internal server error.");
  }
};

export const getProducts = async (req, res) => {
  try {
    const [rows, fields] = await connection.query("SELECT * FROM products");
    res.json(rows);
  } catch (error) {
    console.error("Error al obtener todos los productos: ", error);
    res.status(500).send("Internal server error.");
  }
};
export const getProduct = async (req, res) => {
  try {
    const { id } = req.params
    const [rows, fields] = await connection.query("SELECT * FROM products WHERE idProduct = ?", id);
    res.json(rows);
  } catch (error) {
    console.error("Error al obtener el producto: ", error);
    res.status(500).send("Internal server error.");
  }
};
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, price, imgURL } = req.body;
    const updatedAt = new Date();

    if (!name || !category || !price || !imgURL) {
      return res.status(400).json({ message: "Bad Request. Please provide all fields." });
    }

    const query = "UPDATE products SET name = ?, category = ?, price = ?, imgURL = ?, updatedAt = ? WHERE idProduct = ?";
    const [result] = await connection.query(query, [name, category, price, imgURL, updatedAt, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json({ message: "Product updated successfully." });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).send("Internal server error.");
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const [result] = await connection.query("DELETE FROM products WHERE idProduct = ?", id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error("Error al eliminar el producto: ", error);
    res.status(500).send("Internal server error.");
  }
};
