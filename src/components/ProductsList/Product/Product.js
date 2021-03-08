import React from "react";

const Product = (props) => {
  
  return (
      <div className="Product">
        <p>{props.title} {props.companyName} {props.price}€ {props.offer}</p>
      </div>
    );
};

export default Product;
