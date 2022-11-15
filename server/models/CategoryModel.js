const mongoose = require('mongoose')

const CategoriesSchema = new mongoose.Schema({
    category_name: {
        type: String,
        require: true,
    }
})

const CategoriesModel = mongoose.model('Categories', CategoriesSchema)

module.exports = CategoriesModel