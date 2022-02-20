const low = require('lowdb');
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter).get('products');
const router = express.Router();
const Products = require('../models/listProductsModels.js');
router.route('/')
    .get( async (req, res) => 
    {
        const productList =  await Products.find();
        res.status(200).send(productList);
    })
    .post( async (req, res) => 
    {
        const newProduct =new Products(
            {
                code : req.body.code,
                productName : req.body.productName
            });
        try 
        {
            await newProduct.save();
            res.status(200).send(newProduct);
        } 
        catch (error) 
        {
            console.log(error.message);
        }
    });
router.route('/:id')
    .get((req, res) =>
    {
        const products = db;
        const find = products.__wrapped__.products.find(item => item.id == req.params.id);
        if (find)
        {res.status(200).send(find);}
        else
        {res.status(404).send('can not find product');}
    });

module.exports = router;
