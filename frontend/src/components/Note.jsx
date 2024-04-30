import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const Note = (props) => {
	const deleteNote = (id) => {
		console.log("hello");
	};

	return (
		<div className="note">
			<h1> {props.title} </h1>
			<p>{props.content}</p>

			<button onClick={deleteNote(props.noteid)}>
				<MdDeleteOutline className="del_icon" />
			</button>
		</div>
	);
};

export default Note;
