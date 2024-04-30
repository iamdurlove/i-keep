const Note = require("../models/note-model");

const getAllNotes = async (req, res) => {
	try {
		const response = await Note.find();
		res.status(200).json(response);
	} catch (error) {
		console.log("error from the Note controller: ", error);
	}
};

const postNote = async (req, res) => {
	try {
		const data = req.body;
		const response = await Note.create(data);
		res.status(200).json(response);
		console.log(response);
	} catch (error) {
		console.log(error);
	}
};

module.exports = { getAllNotes, postNote };
