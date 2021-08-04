import { React } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import "./InputItem.css";

const InputItem = ({ text, item, items, setInputGoals }) => {
  const checkToggleHandler = () => {
    setInputGoals(
      items.map((todo) => {
        if (todo.id === item.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const editHandler = (e) => {
    e.preventDefault();
  };

  const deleteHandler = () => {
    setInputGoals(items.filter((el) => el.id !== item.id));
  };

  return (
    <li className={!item.completed ? "input-item" : "input-item__checked"}>
      {text}
      <div className="input-item__btns">
        <button className="input-item__btn" onClick={checkToggleHandler}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button className="input-item__btn" onClick={editHandler}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button
          className="input-item__btn input-item__btn-last"
          onClick={deleteHandler}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};

export default InputItem;
