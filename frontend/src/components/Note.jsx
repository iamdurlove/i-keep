import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

const URL = "http://127.0.0.1:5000/api/note";

const Note = (props) => {
	const [note, setNote] = useState([
		{
			title: "",
			content: "",
		},
	]);
	const fetchNotes = async () => {
		try {
			const response = await fetch(URL, {
				method: "GET",
			});
			const data = await response.json();
			setNote(data);
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchNotes();
	}, []);

	const deleteNote = async (id) => {
		try {
			const response = await fetch(`${URL}/${id}`, {
				method: "DELETE",
			});
			const data = await response.json();
			console.log(data);
			fetchNotes();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{note ? (
				<div className="note_div">
					{note.map((val, index) => {
						return (
							<div className="note" key={index}>
								<h1> {val.title} </h1>
								<p> {val.content} </p>
								<button onClick={() => deleteNote(val._id)}>
									<MdDeleteOutline className="del_icon" />
								</button>
							</div>
						);
					})}
				</div>
			) : (
				<h1>No notes to display</h1>
			)}
		</>
	);
};

export default Note;
