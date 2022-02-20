const express = require('express');
const morgan = require('morgan');

const home = require('./routes/home.js');
const listproducts = require('./routes/listproducts.js');
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(morgan('tiny'));

app.use('/', home);
app.use('/products', listproducts);

mongoose.connect('mongodb://localhost:27017/product').then(() => { console.log('db connected!'); }).catch( err => {console.log('db not conacted', err.message);});
app.listen(port, ( err ) =>
{
    if(err)
        console.log(err);
    else
        console.log('app run in port '+ port);
});
