import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";

function App() {
	return (
		<>
			<Header />
			<CreateNote />
			<Note />
			<Footer />
		</>
	);
}

export default App;
