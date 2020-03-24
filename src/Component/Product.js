import React from "react";

function Product(props){
  return (
      <div>
        <h3>Item Name : {props.item}</h3>
        <h3>Item Price : {props.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</h3>
      </div>
  )
}
export default Product