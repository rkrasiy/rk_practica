import React from "react";
import Button from "../../components/Button/Button";
import "./Client.css";

const Client = (props) => {
  
  return (
    <div className="Client">
    <div className="client-view">{props.number} {props.name} {props.email}</div>
    <div className="controls">
      <Button classes="blue" clicked={props.clickedEdit}>Editar</Button>
      <Button classes="red" clicked={props.clickedRemove}>Eliminar</Button>
    </div>
  </div>
    );
};

export default Client;
