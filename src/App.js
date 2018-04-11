import React, { Component } from 'react';
// import Name from './Name.js';
// import From from './From.js';
import './App.css';

// const api_key = "4c45241c2eea5ed3ae3b2fe6e1549305"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      name: 'Bob',
      from: 'Mom',
      company: 'ABC Inc.',
      tool: 'hammer',
      do: 'Smash',
      something: 'window',
      reference: 'FOAAS 3:16',
      noun: 'taco',
      reaction: 'cry',
      behavior: 'smiling',
      thing: 'computer',
      language: 'Swahili',
      message: '',
      subtitle: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const name = this.state.name;
    const from = this.state.from;
    fetch(`http://foaas.com/off/${name}/${from}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then((results) => {
        return results.json();
    })
    .then((json) => {
      let message = json.message;
      let subtitle = json.subtitle;
      this.setState({message: message});
      this.setState({subtitle: subtitle});
    })
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'input' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value});
  }


  handleSubmit(event) {
    event.preventDefault();
    const newName = this.state.name;
    const newFrom = this.state.from;
    this.setState({name: newName});
    this.setState({from: newFrom});
    this.componentDidMount();
  }



  render() {
    return (
      <div>
        <form>
          <label>
            First Name:
            <input name="name" className="name" type="input"
              onChange={this.handleChange} />
          </label>
          <br />
          <label>
            From:
            <input name="from" className="from" type="input"
              onChange={this.handleChange} />
          </label><br/>
          {/* <Name
              name={this.state.value}
            />
            <From
            from={this.state.value}
          /> */}
          <button onClick={this.handleSubmit} value="Submit">Submit</button>
          {/* <button onClick="document.getElementById('myInput').value = ''">Reset */}
          {/* </button> */}
        </form>
        <div className="container">
          <h1>{this.state.message}</h1>
          <h3>{this.state.subtitle}</h3>
        </div>
      </div>
    );
  }
}

export default App;
