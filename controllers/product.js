var Product = require("../models/product");

exports.create = function (req, res, next) {
  var product = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  product.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send("Product Created successfully");
  });
};

exports.detail = function (req, res, next) {
  Product.findById(req.params.id, function (err, product) {
    if (err) return next(err);
    res.send(product);
  });
};

exports.update = function (req, res, next) {
  Product.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    function (err, product) {
      if (err) return next(err);
      res.send("Product udpated.");
    }
  );
};

exports.delete = function (req, res, next) {
  Product.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};
