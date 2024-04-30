import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert("I am clicked");
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {};

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      <div className="note_div">
        {addItem.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
