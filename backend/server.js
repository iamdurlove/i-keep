require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./router/router");
const connectDB = require("./utils/db");

const corsOptions = {
	origin: [`${process.env.CORS_ORIGIN}`],
	methods: ["GET", "HEAD", "PUT", "POST", "DELETE", "OPTIONS", "PATCH"],
	credientials: true,
};

const os = require("os");
const hostaddress = os.hostname();

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", routes);
app.get("/", (req, res) => {
	res.json({
		message: "Server online",
		developer: "Durlav Parajuli",
		device: hostaddress,
		network: req.ip,
		osVersion: os.release(),
		osPlatform: os.platform(),
		uptime: parseInt(os.uptime()) + " seconds",
		user: os.userInfo(),
	});
});

connectDB().then(() => {
	app.listen(process.env.PORT, () => {
		console.log(`server is running at port: ${process.env.PORT}`);
	});
});
