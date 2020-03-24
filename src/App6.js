import React from "react";
import Conditional from "./Component/Conditional";

class App6 extends React.Component{

  constructor() {
    super();

    this.state={
      isLoading : true,
    }
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({
        isLoading : false
      })
    }, 1500)
  }

  render() {
    return (
        <div>
          {this.state.isLoading === true ? <h1>Loading....</h1> : <Conditional/> }
        </div>
    )
  }

}

export default App6