import React from "react";
import Button from "./Button";

const ButtonsController = ({ title, id, control, increment, decrement }) => {
  return (
    <div id={id}>
      <p>{title}</p>
      <div id={`${id}-label`}>
        <Button
          event={decrement}
          id={`${id}-decrement`}
          iClass="fa fa-arrow-down fa-2x"
        />
        <div id={`${id}-length`}>{control}</div>
        <Button
          event={increment}
          id={`${id}-increment`}
          iClass="fa fa-arrow-up fa-2x"
        />
      </div>
    </div>
  );
};

export default ButtonsController;
