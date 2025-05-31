const Product = require("../model/product.model");

module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
};

module.exports.getAllProducts = (req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.json({ error: err }));
};

module.exports.getOneProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => res.json({ product }))
    .catch((err) => res.json({ error: err }));
};

module.exports.updateProduct = (req, res) => {
  Product.findByIdAndUpdate({ _id: req.params.id }, rew.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedProduct) => res.json(updatedProduct))
    .catch((err) => res.json({ error: err }));
};

module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((deleted) => res.json(deleted))
    .catch((err) => res.json({ error: err }));
};
