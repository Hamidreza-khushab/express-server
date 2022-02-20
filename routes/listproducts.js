const express = require('express');
const mongoose = require('mongoose');

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
    .get( async (req, res) =>
    {
        const contorolId = mongoose.isValidObjectId(req.params.id);
        if (!contorolId)
            return res.status(400).send('bad Id');
        const productFindById = await Products.findById(req.params.id);
        if (productFindById)
        {res.status(200).send(productFindById);}
        else
        {res.status(404).send('can not find product');}
    });

module.exports = router;
