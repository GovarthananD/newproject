const Product = require('../models/productmodule');


exports.addProduct = (req, res) => {
    try {
      let newProduct = new Product(req.body);
      newProduct
        .save()
        .then((data) => {
          res
            .status(200)
            .send({ message: "Product has been added successfully", data });
        })
        .catch((error) => {
          res.status(400).send({ message: "Error while adding Product" });
        });
    } catch (error) {
      res.status(500).send({ message: "Internal Server Error" });
    }
  };


  exports.getAllProduct = (req, res) => {
    try {
      Product.find()
        .then((data) => {
          res
            .status(200)
            .send({
              message: "Product has been retrieved successfully",
              data: data,
            });
        })
        .catch((error) => {
          res.status(400).send({ message: "Error while retrieved Product" });
        });
    } catch (error) {
      res.status(500).send({ message: "Internal Server Error", error });
    }
  };
