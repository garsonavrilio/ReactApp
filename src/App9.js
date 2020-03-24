
import React from 'react'

class App9 extends React.Component {
  constructor() {
    super()

    this.state = {
      firstName: '',
      age: '',
    }
  }

  handleFirstNameChange = (event) => {
    const firstName = event.target.value
    this.setState({ firstName: firstName })
  }

  handleAgeChange = (event) => {
    const age = event.target.value
    this.setState({ age: age })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const {firstName, age,} = this.state

    console.log(`A first name was submitted: ${firstName}. An age was submitted: ${age}`)
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input
                name="firstName"
                type="text"
                value={this.state.firstName}
                onChange={this.handleFirstNameChange} />
          </label>
          <label>
            Age:
            <input
                name="age"
                type="number"
                value={this.state.age}
                onChange={this.handleAgeChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
    );
  }
}

export default App9