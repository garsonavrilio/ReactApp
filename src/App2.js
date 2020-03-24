import React, {Component} from "react";
import './App.css'
import Header from "./Component/Header";

class App2 extends React.Component{

  render() {
    return (
        <div>
          <Header2 username = "Garson"/>
          <Greetings/>
        </div>
    );
  }
}

class Header2 extends React.Component{
  render() {
    return (
        <h1>Hello ,{this.props.username}</h1>
    )
  }
}

class Greetings extends Component{
  render(){
    const date = new Date();
    const hour = date.getHours();
    let timeDay;

    if(hour<12){
      timeDay = "Morning";
    }
    else if(hour >=12 && hour<18){
      timeDay = "Afteroon";
    }
    else {timeDay = "Night"}
    return <h2>Good {timeDay} sir..</h2>
  }
}


export default App2