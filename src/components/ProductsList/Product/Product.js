import React from "react";

const Product = (props) => {
  
  return (
      <div className="Product">
        {props.children}
      </div>
    );
};

export default Product;
