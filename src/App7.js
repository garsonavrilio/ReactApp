import React from "react";
import LoggedInOut from "./Component/LoggedInOut";

class App7 extends React.Component{

  constructor() {
    super();
    this.state ={
      isLoggedIn : false
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(prevState => {
      return {updateLog :prevState.isLoggedIn = !prevState.isLoggedIn}
    })

  }

  componentDidMount() {

  }

  render() {
    return (
        console.log(this.state.isLoggedIn),
        <div>
          {this.state.isLoggedIn ? <h1>Logged In</h1> : <h1>Logged Out</h1>}
          <button onClick={this.handleClick}>Login</button>
        </div>
    )
  }

}

export default App7