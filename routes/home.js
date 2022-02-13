const express = require('express');

const router = express.Router();

router.route('/')
    .get((req, res) => { res.status(200).send('hallo hamid'); });

module.exports = router;
