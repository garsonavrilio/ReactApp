import React, {Component} from "react";
import axios from "axios";
import Card from './Component/Card'

class App8 extends Component {
  constructor() {
    super();
    this.state = {
      studio: [],
      data: []
    }
  };

  // Versi 1
  async getData() {
    const baseURL = "https://ghibliapi.herokuapp.com";
    const {data} = await axios({
      method: "GET",
      url: `${baseURL}/films`
    });
    return data;
  }

  // Versi 2
  getDataSecondVersion(cb) {
    const baseURL = "https://ghibliapi.herokuapp.com";
    axios({
      method: "GET",
      url: `${baseURL}/films`
    }).then(({data}) => {
      cb(null, data);
    }).catch(cb);
  }

  async componentDidMount() {
    await axios.get('https://ghibliapi.herokuapp.com/films')
    .then(res => {
      //console.log(res);
      const studio = res.data;
      console.log(studio);
      this.setState({studio});
    });

    setTimeout(()=> console.log("Connection Timeout"), 3000)
    // this.getDataSecondVersion((err, data) => {
    //   if (err) {
    //     console.warn(err);
    //   }
    //   this.setState({data});
    // });

  }

  render() {
    // const {datas} = this.state.studio;
    return (
        // <div>
        //   {data2 ?
        //       <div>
        //         {data2.map((eachData) => <Card data={eachData.title} key={eachData.id}/>)}
        //       </div> :
        //       <div>loading....</div>}
        // </div>

        <div>
          {this.state.studio.map(data => <Card data = {data} key = {data.id}/>)}
        </div>

    );
  }
}
export default App8;