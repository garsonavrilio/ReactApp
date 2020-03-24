import React from "react";

function Iseng() {

  const firstName = "Garson";
  const lastName = "Avrilio";

  const date = new Date();
  const hour = date.getHours();
  let timeDate;
  const styles = {
    fontSize : "30px",
  };

  if(hour<12){
    timeDate = "Morning";
    styles.color = "#04756F"
  }
  else if(hour >=12 && hour <=18){
    timeDate = "Evening";
    styles.color = "#2E0927"
  }
  else {
    timeDate = "Night"
    styles.color = "#D90000"
  }

  //const styles = {color : "#FF8C00", backgroundColor : "#FF2D00", fontSize : "80px"};

  return (
     // <h1>My Name is {firstName + " " + lastName}..</h1>
      //<h2>My Name is {`${firstName} ${lastName}`}</h2>
      <h1 style={styles}>its {timeDate}</h1>
  )
}

export default Iseng