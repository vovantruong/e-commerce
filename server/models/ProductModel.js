const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    vendor_id: {
        type: String,
        require: true
    },
    product_name: {
        type: String,
        require: true
    },
    product_price: {
        type: String,
        require: true
    },
    product_discount:{
        type: String,
        require: true
    },
    product_category_id: {
        type: String,
        require: true
    },
    product_sub_cate_id: {
        type: String,
        require: true
    },
    product_describe: {
        type: String,
        require: true
    },
    product_manufacture_id: {
        type: String,
        require: true
    },
    product_image: {
        type: Array,
        require: true
    }
})

const ProductModel = mongoose.model('Products', ProductSchema)

module.exports = ProductModel