/**
 * 1. create a connection function for mongodb
 * 2. start a local mongodb server connection
 */

const mongoose = require('mongoose');
require('dotenv').config();
const { MONGO_URL } = process.env;

//create the connection function
// const connectDB = () => {
// 	mongoose
// 		.connect(MONGO_URL, {
// 			useNewUrlParser: true,
// 			useCreateIndex: true,
// 			useUnifiedTopology: true,
// 			useFindAndModify: false,
// 		})
// 		.then(() => {
// 			console.log('MongoDB Connected...');
// 		})
// 		.catch((err) => {
// 			console.error(err);

// 			process.exit(1);
// 		});
// };

//Async MongoDB connection
const connectDB = async () => {
	try {
		await mongoose.connect(MONGO_URL);

		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;
