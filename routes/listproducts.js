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
    .get((req, res) => {res.status(200).send(products);});

module.exports = router;
