import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';
import tweet from '../img/tweet.png';

class Greed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      noun: 'Beer',
      from: 'Mikey D',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShout = this.handleShout.bind(this);
    this.handleGerman = this.handleGerman.bind(this);
    this.handleSpanish = this.handleSpanish.bind(this);
    this.handleFrench = this.handleFrench.bind(this);
    this.handleKorean = this.handleKorean.bind(this);
    this.handleRussian = this.handleRussian.bind(this);
    this.handleCanadian = this.handleCanadian.bind(this);
  }

  componentDidMount() {
    const noun = this.state.noun;
    const from = this.state.from;
    fetch(`http://foaas.com/greed/${noun}/${from}`, {
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
    const noun = this.state.noun;
    const from = this.state.from;
    fetch(`http://foaas.com/greed/${noun}/${from}?shoutcloud`, {
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

  inGerman() {
    const noun = this.state.noun;
    const from = this.state.from;
    fetch(`http://foaas.com/greed/${noun}/${from}?shoutcloud&i18n=de`, {
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

  inSpanish() {
    const noun = this.state.noun;
    const from = this.state.from;
    fetch(`http://foaas.com/greed/${noun}/${from}?i18n=es`, {
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

  inFrench() {
    const noun = this.state.noun;
    const from = this.state.from;
    fetch(`http://foaas.com/greed/${noun}/${from}?i18n=fr`, {
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

  inKorean() {
    const noun = this.state.noun;
    const from = this.state.from;
    fetch(`http://foaas.com/greed/${noun}/${from}?i18n=ko`, {
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

  inRussian() {
    const noun = this.state.noun;
    const from = this.state.from;
    fetch(`http://foaas.com/greed/${noun}/${from}?i18n=ru`, {
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

  inCanadian() {
    const noun = this.state.noun;
    const from = this.state.from;
    fetch(`http://foaas.com/greed/${noun}/${from}`, {
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
      this.setState({message: "I like " + noun + ", eh?"});
      this.setState({subtitle: subtitle + ", eh"});
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
    const newNoun = this.state.noun;
    const newFrom = this.state.from;
    this.setState({noun: newNoun});
    this.setState({from: newFrom});
    this.componentDidMount();
  }

  handleShout(event) {
    event.preventDefault();
    const newNoun = this.state.noun;
    const newFrom = this.state.from;
    this.setState({noun: newNoun});
    this.setState({from: newFrom});
    this.componentWillShout();
  }

  handleGerman(event) {
    event.preventDefault();
    const newNoun = this.state.noun;
    const newFrom = this.state.from;
    this.setState({noun: newNoun});
    this.setState({from: newFrom});
    this.inGerman();
  }

  handleSpanish(event) {
    event.preventDefault();
    const newNoun = this.state.noun;
    const newFrom = this.state.from;
    this.setState({noun: newNoun});
    this.setState({from: newFrom});
    this.inSpanish();
  }

  handleFrench(event) {
    event.preventDefault();
    const newNoun = this.state.noun;
    const newFrom = this.state.from;
    this.setState({noun: newNoun});
    this.setState({from: newFrom});
    this.inFrench();
  }

  handleKorean(event) {
    event.preventDefault();
    const newNoun = this.state.noun;
    const newFrom = this.state.from;
    this.setState({noun: newNoun});
    this.setState({from: newFrom});
    this.inKorean();
  }

  handleRussian(event) {
    event.preventDefault();
    const newNoun = this.state.noun;
    const newFrom = this.state.from;
    this.setState({noun: newNoun});
    this.setState({from: newFrom});
    this.inRussian();
  }

  handleCanadian(event) {
    event.preventDefault();
    const newNoun = this.state.noun;
    const newFrom = this.state.from;
    this.setState({noun: newNoun});
    this.setState({from: newFrom});
    this.inCanadian();
  }


  render() {
    return (
      <div style={{marginTop: 20}}>
        <a id="greed"></a>
        <div className="container">
          <h1>{this.state.message}</h1>
          <h3>{this.state.subtitle}</h3>
        <form>
          <label style={{marginLeft: 81}}>
            Change Noun:
            <input name="noun" className="noun" type="input" style={{margin: 5}}
              onChange={this.handleChange} />
          </label>
          <br />
          <label style={{marginLeft: 82}}>
            Change From:
            <input name="from" className="from" type="input" style={{margin: 5}}
              onChange={this.handleChange} />
          </label><br />
          <RaisedButton label="Submit" default={true} style={{marginLeft: 150, marginTop: 10}} onClick={this.handleSubmit} value="Submit" />
          <RaisedButton label="Shout!!" secondary={true} style={{marginLeft: 20, marginTop: 10}} onClick={this.handleShout} value="Submit" />
          <RaisedButton label="Español" default={true} style={{marginLeft: 20, marginTop: 10}} onClick={this.handleSpanish} value="Submit" />
          <RaisedButton label="Français" default={true} style={{marginLeft: 20, marginTop: 10}} onClick={this.handleFrench} value="Submit" />
          <RaisedButton label="Deutsch" default={true} style={{marginLeft: 20, marginTop: 10}} onClick={this.handleGerman} value="Submit" />
          <RaisedButton label="한국어" default={true} style={{marginLeft: 20, marginTop: 10}} onClick={this.handleKorean} value="Submit" />
          <RaisedButton label="Русский" default={true} style={{marginLeft: 20, marginTop: 10}} onClick={this.handleRussian} value="Submit" />
          <RaisedButton label="Canadian" default={true} style={{marginLeft: 20, marginTop: 10}} onClick={this.handleCanadian} value="Submit" />
        </form><br />
      </div>
        <a className="twitterButton" 
            href={`https://twitter.com/intent/tweet?text=${this.state.message}%20${this.state.subtitle}`} 
            target="_blank"><img src={tweet} alt={'Twitter Button'} style={{marginLeft: 45}}></img></a>
      </div>
    );
  }
}
export default Greed;
