const ProductModel = require('../models/ProductModel')

// ================================= ADD PRODUCT CONTROLLER ======================================= //
exports.addProduct = async (req, res, next) => {
	try {
		let arrImage = []
		for (let i = 0; i < req.files.length; i++) {
			arrImage[i] = req.files[i].filename
		}

		const product = new ProductModel({
			vendor_id: req.body.vendor_id,
			product_name: req.body.product_name,
			product_price: req.body.product_price,
			product_discount: req.body.product_discount,
			product_category_id: req.body.product_category_id,
			product_sub_cate_id: req.body.product_sub_cate_id,
			product_describe: req.body.product_describe,
			product_manufacture_id: req.body.product_manufacture_id,
			product_image: arrImage
		})

        const product_data = await product.save()

        res.status(200).json({ success: true, message: 'Add product successfully', data: product_data })

	} catch (error) {
		return res.status(500).json({ success: false, message: `Internal server error!. ${error.message}` })
	}
}