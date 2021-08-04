import React from "react";

import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm}>
      <div className={classes.card} />
      <div className={classes.modal}>
        <header className={classes.error}>
          <h2>ERROR</h2>
        </header>
        <div className={classes.content}>
          <p>INVALID VALUE</p>
        </div>

        <button className={classes.button} onClick={props.onConfirm}>
          OK
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
