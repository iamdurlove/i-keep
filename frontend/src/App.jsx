import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";
import axios from "axios";

function App() {
	const [data, setData] = useState([
		{
			title: "",
			content: "",
		},
	]);

	const [addItem, setAddItem] = useState([]);

	const addNote = (note) => {
		// alert("I am clicked");
		setAddItem((prevData) => {
			return [...prevData, note];
		});
	};

	const onDelete = (id) => {};

	const fetchNotes = async () => {
		const response = await axios.get("http://localhost:5000/api/note");
		console.log(response.data);
		setData(response.data);
	};

	useEffect(() => {
		fetchNotes();
	}, []);

	return (
		<>
			<Header />
			<CreateNote passNote={addNote} />
			{data ? (
				<div className="note_div">
					{data.map((val, index) => {
						return (
							<Note
								key={index}
								id={index}
								title={val.title}
								content={val.content}
								deleteItem={onDelete}
								noteid={val.id}
							/>
						);
					})}
				</div>
			) : (
				<h1>No notes to display</h1>
			)}
			<Footer />
		</>
	);
}

export default App;
