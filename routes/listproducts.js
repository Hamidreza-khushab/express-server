const low = require('lowdb');
const { v4: uuidv4 } = require('uuid');
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
            id : uuidv4(),
            code : req.body.code,
            productName : req.body.productName
        };
        db.push(product).write();
        res.status(200).send(product);
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
