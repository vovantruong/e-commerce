const mongoose = require('mongoose')

const connectDB = async () => {
	try {
		await mongoose.connect(
			`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@e-commerced.zrmxa1x.mongodb.net/e-commerced?retryWrites=true&w=majority`
		)
		console.log('Connected MongoDB successfully!!')
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}

module.exports = connectDB