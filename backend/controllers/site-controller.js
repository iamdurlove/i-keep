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
const deleteNote = async (req, res) => {
	try {
		const id = req.params.id;
		const deleteNote = await Note.findOneAndDelete({ _id: id });
		if (deleteNote) {
			return res.status(200).json({ message: "Note deleted successfully" });
		} else return res.status(404).json({ error: "Note not found" });
	} catch (error) {
		console.error(error);
	}
};

module.exports = { getAllNotes, postNote, deleteNote };
