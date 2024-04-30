import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem();
  };

  return (
    <div className="note">
      <h1> {props.title} </h1>
      <p>{props.content}</p>

      <button onClick={deleteNote}>
        <DeleteOutlineIcon className="del_icon" />
      </button>
    </div>
  );
};

export default Note;
