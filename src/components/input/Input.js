import React, { useState } from "react";

import ErrorModal from "../modal/ErrorModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./Input.css";

function Input({ items, setInputGoals }) {
  const [text, setText] = useState("");
  const [inputDirty, setInputlDirty] = useState(false);
  const [inputError, setInputError] = useState("INVALID INPUT");
  const [error, setError] = useState(false);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "input":
        setInputlDirty(true);
        break;
      default:
        return;
    }
  };

  const inputHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setInputlDirty(false);
    }
    setText(e.target.value);
  };

  const addNewTaskHandler = (event) => {
    event.preventDefault();

    if (text.trim().length < 1) {
      setError(true);
    }

    if ((text.length <= 2 && text.length > 0) || text.trim().length < 3) {
      setInputError("AT LEAST 3 CHARACTERS");
    } else if (text !== "" && items.length <= 7) {
      setInputGoals([
        ...items,
        {
          text: text,
          completed: false,
          id: Math.random() * 100000000000000000,
        },
      ]);

      setText("");
      setInputError("");
    } else if (text === "") {
      setInputError("INVALID INPUT");
    } else if (items.length <= 8) {
      setInputError("YOU CAN ADD ONLY 8 TASKS");
    }
    setInputlDirty(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addNewTaskHandler(e);
    }
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <div>
      {error && <ErrorModal onConfirm={errorHandler} />}
      <div className="input">
        <div className="validation">
          {inputDirty && inputError && (
            <div className="valid">{inputError}</div>
          )}
        </div>

        <input
          onBlur={(e) => blurHandler(e)}
          value={text}
          placeholder="Add a todo"
          onChange={(e) => inputHandler(e)}
          onKeyDown={handleKeyPress}
          className="input-field"
          type="text"
          name="input"
        />
        <button className="input-btn" type="submit" onClick={addNewTaskHandler}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
}
export default Input;
