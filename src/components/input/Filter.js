import React from "react";

import "./Filter.css";

const Filter = ({ onChangeFilter, selected }) => {
  const dropdownChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  };
  return (
    <div className="filter">
      <div className="filter__control">
        <label>FILTER</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          <option value="ALL">ALL</option>
          <option value="COMPLETED">COMPLETED</option>
          <option value="UNCOMPLETED">UNCOMPLETED</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
