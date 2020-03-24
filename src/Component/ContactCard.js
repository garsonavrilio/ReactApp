import React from "react";

function ContactCard(props){
  console.log(props)
  console.log(props.contact)
  return (
      <div>
        <img src={props.contact.imgUrl}/>
        <h3 style = {{display : props.contact.name ? "block" : "none"}}>Name : {props.contact.name}</h3>
        <p style= {{color: !props.contact.name && "#900000"}}>Phone :{props.contact.phone}</p>
        <p>Email : {props.contact.email}</p>
      </div>
  )
}

export default ContactCard