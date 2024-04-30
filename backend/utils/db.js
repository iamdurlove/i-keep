const mongoose = require("mongoose");

const DB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
	try {
		await mongoose.connect(onlineURI);
		console.log("connected to database");
	} catch (error) {
		console.log("connection failed", error);
		process.exit(0);
	}
};

module.exports = connectDB;
