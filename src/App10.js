import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class App10 extends React.Component{

  constructor() {
    super();
    this.state ={
      username:'',
      password:''
    }
  }

  handleChangeUsername = (event) =>{
    const username = event.target.value;
    this.setState({username : username})
  };

  handleChangePassword = (event) =>{
    const password = event.target.value;
    this.setState({password : password})
  };

  handleSubmit = (event) =>{
    event.preventDefault();
    const resultData = JSON.stringify(this.state)
    // axios.post("localhost:8080/myapp/login",{
    //   "Username" :username,
    //   "Password" :password
    // })
    // .then(res=>{
    //   console.log(res)
    // });

    axios({
      method : "POST",
      url : "localhost:8080/myapp/login",
      headers : {
        'Content-type' : 'application/json'
      },
      data : {resultData}
    }).then( ({data}) => console.log(data) )
    .catch( err => console.log(err))


  };

  render() {
    return(
        <form onSubmit={this.handleSubmit}>
          <h1>HI WELCOME TO LOGIN PAGE</h1>
          <label>
            Username:
            <input type="text" name="username" value={this.state.username} onChange={this.handleChangeUsername}/>
          </label>
          <br/>
          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleChangePassword}/>
          </label>
          <br/>
          <button type="submit">Login</button>
          <Link to="/register"><button type="button" className="btn-info">Register</button></Link>
        </form>
    )
  }
}
export default App10