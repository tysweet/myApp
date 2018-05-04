import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';
import tweet from '../img/tweet.png';

class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      name: 'Jane',
      from: 'Dick',
      reference: 'FOAAS 4:20',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const name = this.state.name;
    const reference = this.state.reference;
    const from = this.state.from;
    fetch(`http://foaas.com/field/${name}/${from}/${reference}`, {
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
    const newRefer = this.state.reference;
    const newFrom = this.state.from;
    this.setState({name: newName});
    this.setState({name: newRefer});
    this.setState({from: newFrom});
    this.componentDidMount();
  }



  render() {
    return (
      <div style={{marginTop: 20}}>
        <a id="field"></a>
        <div className="container">
          <h1>{this.state.message}</h1>
          <h3>{this.state.subtitle}</h3>
        </div>
        <form>
          <label style={{marginLeft: 78}}>
            Change Name:
            <input name="name" className="name" type="input" style={{margin: 5}}
              onChange={this.handleChange} />
          </label><br />
          <label style={{marginLeft: 85}}>
            Change From:
            <input name="something" className="something" type="input" style={{margin: 5}}
              onChange={this.handleChange} />
          </label><br />
          <label style={{marginLeft: 48}}>
            Change Reference:
            <input name="from" className="from" type="input" style={{margin: 5}}
              onChange={this.handleChange} />
          </label><br />
          <RaisedButton label="Submit" secondary={true} style={{marginLeft: 150, marginTop: 10}} onClick={this.handleSubmit} value="Submit" />
        </form><br />
        <a className="twitterButton" 
          href={`https://twitter.com/intent/tweet?text=${this.state.message}%20${this.state.subtitle}`} 
          target="_blank"><img src={tweet} alt={'Twitter Button'} style={{marginLeft: 45}}></img></a>
      </div>
    );
  }
}
export default Field;
