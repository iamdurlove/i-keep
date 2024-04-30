import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import axios from "axios";

const CreateNote = (props) => {
	const [note, setNote] = useState({
		title: "",
		content: "",
	});

	axios
		.post("https://127.0.0.1:5000/api/note", {
			note,
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});

	const InputEvent = (event) => {
		const { value, name } = event.target;

		setNote((prevData) => {
			return {
				...prevData,
				[name]: value,
			};
		});
	};

	const addEvent = () => {
		props.passNote(note);
		setNote({
			title: "",
			content: "",
		});
	};

	return (
		<>
			<div className="main_note">
				<form action="">
					<input
						autoComplete="off"
						type="text"
						placeholder="Title"
						name="title"
						value={note.title}
						onChange={InputEvent}
						id=""
					/>
					<textarea
						placeholder="Write a note"
						id=""
						cols="40"
						rows="3"
						name="content"
						value={note.content}
						onChange={InputEvent}
					></textarea>
					<button onClick={addEvent}>
						<IoIosAddCircle className="plus_btn" />
					</button>
				</form>
			</div>
		</>
	);
};

export default CreateNote;
