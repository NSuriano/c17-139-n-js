const express = require("express");
const router = express.Router();
const { editProduct, createProduct, deleteProduct, getProduct, getAllProduct, getAllProductOf} =  require('./../controllers/Product');

router
    .get('/',getAllProduct)
    .get('/:id',getProduct)
    .get('/commerce/:id',getAllProductOf)

module.exports = router