const express = require('express');
const { isAuth } = require('../utils/authentication');
const { getAllProduct, addProduct } = require('../controllers/product.controllers');
const { isAdmin } = require('../utils/authorization');
const router = express.Router();

router.get('/getProducts',isAuth, getAllProduct);
router.post('/addProducts',isAuth, isAdmin, addProduct);

module.exports = router;