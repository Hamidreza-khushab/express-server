const low = require('lowdb');
const express = require('express');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter).get('products');
const router = express.Router();

router.route('/')
    .get((req, res) => 
    {
        const products = db;
        res.status(200).send(products);
    })
    .post((req, res) => 
    {
        const product =
        {
            id : db.__wrapped__.products[ db.__wrapped__.products.length -1 ].id +1,
            code : req.body.code,
            productName : req.body.productName
        };
        db.push(product).write();
        res.status(200).send(product);
    });

module.exports = router;
