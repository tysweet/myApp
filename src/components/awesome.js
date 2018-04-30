import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SendSMS from '../send_sms.js';
import '../App.css';

class Awesome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      from: 'Mom',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTweet = this.handleTweet.bind(this);
  }

  componentDidMount() {
    const from = this.state.from;
    fetch(`http://foaas.com/awesome/${from}`, {
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
    const newFrom = this.state.from;
    this.setState({from: newFrom});
    this.componentDidMount();
  }

  handleTweet(event) {
    const message = this.state.message;
    const subtitle = this.state.subtitle;
    fetch (`https://api.twitter.com/1.1/${message}+${subtitle}/update.json`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then((results) => {
        return results.json();
    })
    .then((json) => {
      
    }
  )
  }


  render() {
    return (
      <div style={{marginTop: 20}}>
        <form>
          <label style={{marginLeft: 42}}>
            From:
            <input name="from" className="from" type="input" style={{margin: 5}}
              onChange={this.handleChange} />
          </label><br />
          <RaisedButton label="Submit" style={{marginLeft: 110, marginTop: 10}} onClick={this.handleSubmit} value="Submit" />
          
          </form>
        <div className="container" style={{margin: 10}}>
          <h1>{this.state.message}</h1>
          <h3>{this.state.subtitle}</h3>
          <RaisedButton label="Tweet" onClick={this.handleTweet} value="Submit" />
        </div>
      </div>
    );
  }
}
export default Awesome;
