import React, {Component} from "react";

class Card extends Component{
  constructor(props) {
    super(props);
    this.styles = {
      container : {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        backgroundColor:'blue'
      }
    }
  }
  // disini oke:D
  render() {
    return (
        <div style={this.styles.container}>
          {JSON.stringify(this.props.data,null,2)}
        </div>
    )
  }
}

export default Card;