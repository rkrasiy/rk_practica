import React from "react";
import Product from "./Product/Product";

const ProductsList = (props) => {
  let productos = []
  if(props.json)
    productos = props.json.map( data => (<Product 
        key={data.id} 
        title={data.title}
        companyName={data.companyName}
        price={data.price}
        offer={data.offer}
        ></Product> 
    ))
  return (
      <div className="Products-list">
       {productos}
      </div>
    );
};

export default ProductsList;
