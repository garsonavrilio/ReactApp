import React from "react";

class App4 extends React.Component{



  render() {
    function handleClick(){
      console.log("I was Clicked")
    }

    function handleOver(){
      console.log("I was Hover")
    }

    return (
        <div>
          <img src="http://www.kittenplace.com/200/100" onMouseOver={handleOver}/>
          <br/>
          <br/>
          <button onClick={handleClick}>Click</button>
        </div>

    )
  }
}

export default App4