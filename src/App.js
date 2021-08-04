import React, { useState, useEffect } from "react";

import Input from "./components/input/Input";
import InputList from "./components/input/InputList";
import Filter from "./components/input/Filter";
import DeleteBtn from "./components/deleteBtn/DeleteAll";
import DeleteCompleted from "./components/deleteBtn/DeleteCompleted";

import "./App.css";

const GOALS = [
  { text: "Filter", completed: false, id: Math.random() * 100000000000000000 },
  { text: "Milk", completed: false, id: Math.random() * 100000000000000000 },
  { text: "Water", completed: false, id: Math.random() * 100000000000000000 },
];

const App = () => {
  const [inputGoals, setInputGoals] = useState(GOALS);
  const [filteredList, setFilteredList] = useState("ALL");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (filteredList) {
        case "COMPLETED":
          setFilteredTodos(
            inputGoals.filter((inputGoal) => inputGoal.completed === true)
          );
          break;
        case "UNCOMPLETED":
          setFilteredTodos(
            inputGoals.filter((inputGoal) => inputGoal.completed === false)
          );
          break;
        default:
          setFilteredTodos(inputGoals);
          break;
      }
    };
    filterHandler();
  }, [inputGoals, filteredList]);

  const filterChangeHandler = (selectedOption) => {
    setFilteredList(selectedOption);
  };

  return (
    <div className="app">
      <header className="App-header">
        <p className="App-header__text">TO-DO APP</p>
      </header>

      <Input items={inputGoals} setInputGoals={setInputGoals} />
      <Filter selected={filteredList} onChangeFilter={filterChangeHandler} />
      {inputGoals.length > 0 && (
        <div className="app-counter">YOU HAVE {inputGoals.length} TASKS</div>
      )}
      <InputList
        items={inputGoals}
        setInputGoals={setInputGoals}
        filteredTodos={filteredTodos}
      />
      {inputGoals.length > 0 && (
        <div className="buttons">
          <DeleteBtn items={inputGoals} setInputGoals={setInputGoals} />
          <DeleteCompleted items={inputGoals} setInputGoals={setInputGoals} />
        </div>
      )}
    </div>
  );
};

export default App;
