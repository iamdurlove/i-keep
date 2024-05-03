import { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

const URL = import.meta.env.VITE_APP_URI_API;
const Note = () => {
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
		if (window.confirm("Are you sure you want to delete this note?")) {
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
		}
	};

	return (
		<>
			{note.length > 0 ? (
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
				<h2
					style={{
						textAlign: "center",
						marginTop: "10px",
						fontSize: "20px",
						color: "red",
					}}
				>
					No notes to display
				</h2>
			)}
		</>
	);
};

export default Note;
