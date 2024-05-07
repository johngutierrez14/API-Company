class Product {
  constructor(name, category, price, imgURL) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.imgURL = imgURL;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = Product;
