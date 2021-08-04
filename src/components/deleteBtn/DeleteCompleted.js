import React from "react";

import "./DeleteCompleted.css";

const DeleteCompleted = ({ items, setInputGoals }) => {
  const deleteCompletedHandler = () => {
    setInputGoals(items.filter((inputGoal) => inputGoal.completed === false));
  };

  return (
    <button onClick={deleteCompletedHandler} className="delete">
      DELETE COMPLETED
    </button>
  );
};

export default DeleteCompleted;
