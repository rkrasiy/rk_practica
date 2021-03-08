import React from "react";
import Client from "./Client/Client";

const ClientsList = (props) => {
  
  let clients = []
  if(props.json)
    clients = props.json.map( data => (<Client key={data.id} name={data.name}
        email={data.email} ></Client> 
    ))
  return (
      <div className="Clients-list">
        {clients}
      </div>
    );
};

export default ClientsList;
