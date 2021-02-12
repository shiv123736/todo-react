import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../App";
import List from "./List";
import "../style/TextBox.css";

const TextBox = (props) => {
  const [text, setText] = useState("");
  const [id, setId] = useState(0);
  const [button, setButton] = useState(false);

  const context = useContext(userContext);
  const dispatch = context.method;
  console.log(dispatch);

  const handleEditText = (txt, Id) => {
    console.log("method invoked" + txt);
    setText(txt);
    setId(Id);
    setButton(true);
    console.log(id);
  };

  const saveMethod = () => {
    dispatch({
      type: "save",
      item: text,
      id: id,
      read: false,
    });
    setText("");
    setButton(false);
  };

  const addMethod = () => {
    // console.log(text);
    dispatch({
      type: "add",
      item: text,
      read: false,
    });
    setText("");
  };

  const handleText = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <div>
      <h2>To Do</h2>
      <div className="text">
        <input
          className="text-box"
          type="text"
          onChange={handleText}
          value={text}
          placeholder="Enter Text Here..."
        ></input>
        {button ? (
          <button className="add-btn" onClick={saveMethod}>
            Save
          </button>
        ) : (
          <button className="add-btn" onClick={addMethod}>
            Add
          </button>
        )}
        {/* <button className="add-btn" onClick={addMethod}>
          Add
        </button> */}
      </div>
      <List method={handleEditText} />
    </div>
  );
};

export default TextBox;
