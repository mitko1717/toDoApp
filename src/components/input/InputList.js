import React from "react";

import InputItem from "./InputItem";

import "./InputList.css";

const InputList = ({ items, setInputGoals, filteredTodos }) => {
  if (items.length === 0) {
    return (
      <h2 className="input-list__fallback">
        No tasks
        <br />
        Let's add some!
      </h2>
    );
  }
  return (
    <ul className="input-list">
      {filteredTodos.map((item) => (
        <InputItem
          key={item.id}
          text={item.text}
          id={item.id}
          completed={item.completed}
          setInputGoals={setInputGoals}
          items={items}
          item={item}
        />
      ))}
    </ul>
  );
};

export default InputList;
