const { Schema, model } = require("mongoose");

const notesSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	note: {
		type: String,
		required: true,
	},
});

// model
const Note = new model("Notes", notesSchema);

module.exports = Note;
