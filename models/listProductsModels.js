const mongoose = require('mongoose');

const schema = new mongoose.Schema( { code:{ type : String, required :true }, productName:{ type : String, required :true } } );

const ProductsModel = mongoose.model('products', schema);

module.exports = ProductsModel;
