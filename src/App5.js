import React from "react";

class App5 extends React.Component{
  constructor() {
    super();
    this.state ={
      count : 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.doubledNumber = this.doubledNumber.bind(this);
  }

  handleClick(){
    this.setState(function(prevState){
      return {
        count: prevState.count + 1,
      }
    })
  }

  doubledNumber(){
    this.setState(function(prevState){
      return {
        count : prevState.count + 2,
      }
    })
  }

  render() {
    return(
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.handleClick}>+1</button>
          <button onClick={this.doubledNumber}>+2</button>
        </div>
    )
  }
}

export default App5