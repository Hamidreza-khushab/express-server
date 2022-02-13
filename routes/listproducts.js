const low = require('lowdb');
const express = require('express');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

const saveProducts =
{
    products :
[
    {
        id : 1,
        code : '123456',
        productName : 'saferan'
    }
]
};
const router = express.Router();

router.route('/')
    .get((req, res) => {res.status(200).send(products);})
    .post((req, res) => 
    {
        const product =
        {
            id : saveProducts.products[ saveProducts.products.length -1 ].id +1,
            code : req.body.code,
            productName : req.body.productName
        };
        saveProducts.products.push(product);
        res.status(200).send(product);
        db.defaults(saveProducts).write();     
    });

module.exports = router;
