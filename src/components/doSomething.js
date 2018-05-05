import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';
import tweet from '../img/tweet.png';

class DoSomething extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      do: 'Run',
      something: 'numbers',
      from: 'Mom',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShout = this.handleShout.bind(this);
  }

  componentDidMount() {
    const doNow = this.state.do;
    const something = this.state.something;
    const from = this.state.from;
    fetch(`http://foaas.com/dosomething/${doNow}/${something}/${from}`, {
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

  componentWillShout() {
    const doNow = this.state.do;
    const something = this.state.something;
    const from = this.state.from;
    fetch(`http://foaas.com/dosomething/${doNow}/${something}/${from}?shoutcloud`, {
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
    const newDo = this.state.do;
    const newSomething = this.state.something;
    const newFrom = this.state.from;
    this.setState({name: newDo});
    this.setState({name: newSomething});
    this.setState({from: newFrom});
    this.componentDidMount();
  }

  handleShout(event) {
    event.preventDefault();
    const newDo = this.state.do;
    const newSomething = this.state.something;
    const newFrom = this.state.from;
    this.setState({name: newDo});
    this.setState({name: newSomething});
    this.setState({from: newFrom});
    this.componentWillShout();
  }

  render() {
    return (
      <div style={{marginTop: 20}}>
        <a id="dosomething"></a>
          <div className="container">
            <h1>{this.state.message}</h1>
            <h3>{this.state.subtitle}</h3>
          </div>
          <form>
            <label style={{marginLeft: 148}}>
              Change Do:
              <input name="name" className="name" type="input" style={{margin: 5}}
                onChange={this.handleChange} />
            </label><br />
            <label style={{marginLeft: 92}}>
              Change Something:
              <input name="something" className="something" type="input" style={{margin: 5}}
                onChange={this.handleChange} />
            </label><br />
            <label style={{marginLeft: 132}}>
              Change From:
              <input name="from" className="from" type="input" style={{margin: 5}}
                onChange={this.handleChange} />
            </label><br />
            <RaisedButton label="Submit" default={true} style={{marginLeft: 150, marginTop: 10}} onClick={this.handleSubmit} value="Submit" />
            <RaisedButton label="Shout!!" secondary={true} style={{marginLeft: 20, marginTop: 10}} onClick={this.handleShout} value="Submit" />
          </form><br />
          <a className="twitterButton" 
            href={`https://twitter.com/intent/tweet?text=${this.state.message}%20${this.state.subtitle}`} 
            target="_blank"><img src={tweet} alt={'Twitter Button'} style={{marginLeft: 45}}></img></a>
      </div>
    );
  }
}
export default DoSomething;
