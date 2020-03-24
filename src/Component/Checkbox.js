import React from "react";

function Checkbox(props){

  const completedStyle = {
    fontStyle : "italic",
    color : "#90000",
    textDecoration : "line-through",
  }

  return(
      <div className="checkbox">
        <input
            type="checkbox"
            checked = {props.item.completed}
            onChange=
                {
                  function()
                  {
                    props.handleChange(props.item.id)
                  }
                }
        />
               <p style={props.item.completed ? completedStyle : null}>
                 {props.item.name}
               </p>
      </div>
  )
}

export default Checkbox