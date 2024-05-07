import connection from "../database";
import Product from "../models/Products";

export const createProduct = async (req, res) => {
  const { name, category, price, imgURL } = req.body;
  const newProduct = new Product(name, category, price, imgURL);

  try {
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
    const [row, fields] = await connection.query('SELECT * FROM products')
    res.json(rows);
  } catch (error) {
    onsole.error("Error creating product: ", error);
    res.status(500).send("Internal server error.");
  }
};
export const getProduct = (req, res) => {
  res.json("Get Product by Id");
};
export const updateProduct = (req, res) => {
  res.json("Update one Product by Id");
};
export const deleteProduct = (req, res) => {
  res.json("Delete one Product by Id");
};
