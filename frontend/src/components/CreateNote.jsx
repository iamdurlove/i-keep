import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

const URL = "http://127.0.0.1:5000/api/note";

const CreateNote = (props) => {
	const [note, setNote] = useState({
		title: "",
		content: "",
	});

	const handleInput = (e) => {
		const { value, name } = e.target;
		setNote({ ...note, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(note),
			});
			const data = await response.json();
			window.location.reload();

			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="main_note">
				<form action="POST" onSubmit={handleSubmit}>
					<input
						autoComplete="off"
						type="text"
						placeholder="Title"
						name="title"
						value={note.title}
						onChange={handleInput}
						id=""
					/>
					<textarea
						placeholder="Write a note"
						id=""
						cols="40"
						rows="3"
						name="content"
						value={note.content}
						onChange={handleInput}
					></textarea>
					<button type="submit">
						<IoIosAddCircle className="plus_btn" />
					</button>
				</form>
			</div>
		</>
	);
};

export default CreateNote;
