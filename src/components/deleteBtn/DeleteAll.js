import React from "react";

import "./DeleteAll.css";

const DeleteBtn = ({ items, setInputGoals }) => {
  const deleteAllHandler = () => {
    setInputGoals([]);
  };
  return (
    <button className="delete" onClick={deleteAllHandler}>
      DELETE ALL
    </button>
  );
};

export default DeleteBtn;
