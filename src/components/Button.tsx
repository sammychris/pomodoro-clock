import React from "react";

const Button = ({ event, id, iClass }) => {
  return (
    <div className="container-buttons" onClick={event}>
      <i id={id} className={iClass}></i>
    </div>
  );
};

export default Button;
