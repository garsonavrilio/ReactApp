import React from "react";
import axios from "axios";
import './App.css';


class App12 extends React.Component{

  constructor() {
    super();
    this.state={
      data:[],
      dataUpload: []
    }
  }

  handleClick = (event) => {
    const id = event.target.value;
    this.setState({
      dataUpload: [...this.state.dataUpload, id]
    });
    console.log('id: ', this.state.dataUpload)
  };

  componentDidMount() {
    axios.get("https://ghibliapi.herokuapp.com/films")
    .then(res => {
      const resData = res.data;
      this.setState({data : resData});
    })
  }


  render() {
    return (
        <div>
          <h1> ITEM LIST </h1>
          <table>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
            {
              this.state.data.map(d => {
                return (
                  <tr key={d.id}>
                    <th>{d.id}</th>
                    <th>{d.title}</th>
                    <th>{d.description}</th>
                    <th>
                      <button value={d.id} onClick={this.handleClick}>Add
                      </button>
                    </th>
                  </tr>
                )
              })
            }
          </table>
        </div>
    );
  }

}

export default App12