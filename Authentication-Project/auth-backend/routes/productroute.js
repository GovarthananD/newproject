const express = require("express");
const Product = require("../models/productmodule");
const { getAllProduct, addProduct } = require("../controllers/product.controllers");
const { isAuth } = require("../utils/authentication");
const { isAdmin } = require("../utils/authorization");
const router = express.Router();

router.post("/addProducts", isAuth,isAdmin, addProduct);

router.get("/getProducts", isAuth, getAllProduct);

module.exports = router;
