import React from "react";

const Client = (props) => {
  
  return (
      <div className="Client">
        <p>{props.name} {props.email}</p>
      </div>
    );
};

export default Client;
