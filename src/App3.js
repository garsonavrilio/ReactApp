import React from "react";

class App3 extends React.Component{

  constructor() {
    super();
    this.state = {
      name : "Garson",
      age : 20,
      isLoggedIn : true,
    }
  }

  render() {

    let wordDisplay;

    if(this.state.isLoggedIn === true){
      wordDisplay = "in";
    }
    else{ wordDisplay = "out" }

    return (
        <div>
          <h1>hi.. i'm {this.state.name} and i'm {this.state.age} years old</h1>
          <p> You are now log{wordDisplay}</p>
        </div>

    )
  }

}

export default App3