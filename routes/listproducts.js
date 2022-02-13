const express = require('express');

const products =
[
    {
        id : 1,
        code : '123456',
        productName : 'saferan'
    }
];

const router = express.Router();

router.route('/')
    .get((req, res) => {res.status(200).send(products);})
    .post((req, res) => 
    {
        const product =
        {
            id : products[ products.length -1 ].id +1,
            code : req.body.code,
            productName : req.body.productName
        };
        products.push(product);
        res.status(200).send(product);
       
    });

module.exports = router;
