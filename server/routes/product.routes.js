const ProductController = require("../controller/product.controller");

module.exports = (app) => {
  app.get("/api/products", ProductController.getAllProducts);
  app.get("/api/product/:id", ProductController.getOneProduct);
  app.post("/api/product", ProductController.createProduct);
  app.put("/api/newproduct/:id", ProductController.updateProduct);
  app.delete("/api/deleteproduct/:id", ProductController.deleteProduct);
};
