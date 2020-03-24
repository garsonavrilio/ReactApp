import React from "react";
import { Combobox } from 'react-widgets';
import axios from 'axios'
import {Link} from "react-router-dom";

class App11 extends React.Component{

  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      fullname: '',
      gender: '',
      role: ''
    };
    this.handleChangeGender = this.handleChangeGender.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeRole = this.handleChangeRole.bind(this);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //const {username,password,fullname,gender,role} = this.state;
    const json = JSON.stringify(this.state);
    console.log(json);
    if(this.handleValidation()){
      axios.post("localhost:8080/myapp/admin/sign-up",{json},
          {
            headers : {
              'Content-Type': 'application/json'
            }
          }
      );
      alert("Form Submitted");
    }
    else{
      alert("Undefined form");
    }
  };

  handleChangeUsername = (event) =>{
    const username = event.target.value;
    this.setState({username : username});
  };

  handleChangePassword = (event) =>{
    const password = event.target.value;
    this.setState({password : password});
  };

  handleChangeFullname = (event) =>{
    const fullname = event.target.value;
    this.setState({fullname : fullname});
  };

  handleChangeGender = (event) =>{
    this.setState({gender : event.target.value})
  };

  handleChangeRole = (event) =>{
    const role = event.target.value;
    this.setState({role : role})
  };

  handleValidation = () =>{
    let flag = true;

    if(this.state.username === null){
      flag = false;
    }

    return flag;
  };


  render() {
    return(
        <form name="registerform" className="registerForm" onSubmit={this.handleSubmit}>
          <h1>REGISTER FORM</h1>
          <label>
            Username : <input type="text" name="username" value={this.state.username} onChange={this.handleChangeUsername} required/>
          </label>

          <br/>

          <label>
            Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChangePassword}/>
          </label>

          <br/>

          <label>
            Fullname : <input type="text" name="fullname" value={this.state.fullname} onChange={this.handleChangeFullname}/>
          </label>

          <br/>

          <label>
            Gender :
            <label>
              <input type="radio" value="Male" checked={this.state.gender === "Male"} onChange={this.handleChangeGender}/>
              Male
            </label>
            <label>
              <input type="radio" value="Female" checked={this.state.gender === "Female"} onChange={this.handleChangeGender}/>
              Female
            </label>
          </label>
          <br/>
          <label>
            Role :
            <label>
              <input type="radio" value="ADMIN" checked={this.state.role === "ADMIN"} onChange={this.handleChangeRole}/>
              ADMIN
            </label>
            <label>
              <input type="radio" value="STAFF" checked={this.state.role === "STAFF"} onChange={this.handleChangeRole}/>
              STAFF
            </label>
            <label>
              <input type="radio" value="CASHIER" checked={this.state.role === "CASHIER"} onChange={this.handleChangeRole} required/>
              CASHIER
            </label>
          </label>
          <br/>
          <div className='Example'>
            selected value : {this.state.role}
          </div>
          <Link to="/login">
          <button type="submit">Submit</button>
          </Link>
        </form>
    )
  }

}

export default App11