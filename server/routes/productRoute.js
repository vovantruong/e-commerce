const express = require('express')
const product_route = express();

const bodyParser = require('body-parser')
product_route.use(bodyParser.json())
product_route.use(bodyParser.urlencoded({ extended: true }))

const multer = require('multer')
const path = require('path')

product_route.use(express.static('public'))

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, '../public/productImages'), function (err, success) {
			if (err) {
				throw err
			}
		})
	},
	filename: function (req, file, cb) {
		const name = Date.now() + '-' + file.originalname
		cb(null, name, function (error, success) {
			if (error) {
				throw error
			}
		})
	},
})

const upload = multer({ storage: storage })


const { addProduct } = require('../controllers/productController')

product_route.post("/add-product",upload.array("product_image"),addProduct)



module.exports = product_route
