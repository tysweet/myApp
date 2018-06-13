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
      reference: 'FOAAS 7:6',
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
    const name = this.state.name;
    const from = this.state.from;
    const reference = this.state.reference;
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
      this.setState({message: "And " + name + " said unto " + from + ", 'Verily, cast thine eyes upon the field in which I grow my cares', and " + from + " gave witness unto the field, and saw that it was barren."});
      this.setState({subtitle: subtitle});
    })
  }

  componentWillShout() {
    const name = this.state.name;
    const from = this.state.from;
    const reference = this.state.reference;
    fetch(`http://foaas.com/field/${name}/${from}/${reference}?shoutcloud`, {
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
      this.setState({message: "AND " + name.toUpperCase() + " SAID UNTO " + from.toUpperCase() + ", 'VERILY, CAST THINE EYES UPON THE FIELD IN WHICH I GROW MY CARES', AND " + from.toUpperCase() + " GAVE WITNESS UNTO THE FIELD, AND SAW THAT IT WAS BARREN!"});
      this.setState({subtitle: subtitle});
    })
  }

  inGerman() {
    const name = this.state.name;
    const from = this.state.from;
    const reference = this.state.reference;
    fetch(`http://foaas.com/field/${name}/${from}/${reference}?shoutcloud&i18n=de`, {
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
    const name = this.state.name;
    const from = this.state.from;
    const reference = this.state.reference;
    fetch(`http://foaas.com/field/${name}/${from}/${reference}?i18n=es`, {
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
    const name = this.state.name;
    const from = this.state.from;
    const reference = this.state.reference;
    fetch(`http://foaas.com/field/${name}/${from}/${reference}?i18n=fr`, {
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
    const name = this.state.name;
    const from = this.state.from;
    const reference = this.state.reference;
    fetch(`http://foaas.com/field/${name}/${from}/${reference}?i18n=ko`, {
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
    const name = this.state.name;
    const from = this.state.from;
    const reference = this.state.reference;
    fetch(`http://foaas.com/field/${name}/${from}/${reference}?i18n=ru`, {
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
    const name = this.state.name;
    const from = this.state.from;
    const reference = this.state.reference;
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
      this.setState({message: "And " + name + " said unto " + from + ", 'Verily, cast thine eyes upon the field in which I grow my cares', and " + from + " gave witness unto the field, and saw that it was, like, so full, eh?"});
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
    const newName = this.state.name;
    const newFrom = this.state.from;
    const newRefer = this.state.reference;
    this.setState({name: newName});
    this.setState({from: newFrom});
    this.setState({reference: newRefer});
    this.componentDidMount();
  }

  handleShout(event) {
    event.preventDefault();
    const newName = this.state.name;
    const newFrom = this.state.from;
    const newRefer = this.state.reference;
    this.setState({name: newName});
    this.setState({from: newFrom});
    this.setState({reference: newRefer});
    this.componentWillShout();
  }

  handleGerman(event) {
    event.preventDefault();
    const newName = this.state.name;
    const newFrom = this.state.from;
    const newRefer = this.state.reference;
    this.setState({name: newName});
    this.setState({from: newFrom});
    this.setState({reference: newRefer});
    this.inGerman();
  }

  handleSpanish(event) {
    event.preventDefault();
    const newName = this.state.name;
    const newFrom = this.state.from;
    const newRefer = this.state.reference;
    this.setState({name: newName});
    this.setState({from: newFrom});
    this.setState({reference: newRefer});
    this.inSpanish();
  }

  handleFrench(event) {
    event.preventDefault();
    const newName = this.state.name;
    const newFrom = this.state.from;
    const newRefer = this.state.reference;
    this.setState({name: newName});
    this.setState({from: newFrom});
    this.setState({reference: newRefer});
    this.inFrench();
  }

  handleKorean(event) {
    event.preventDefault();
    const newName = this.state.name;
    const newFrom = this.state.from;
    const newRefer = this.state.reference;
    this.setState({name: newName});
    this.setState({from: newFrom});
    this.setState({reference: newRefer});
    this.inKorean();
  }

  handleRussian(event) {
    event.preventDefault();
    const newName = this.state.name;
    const newFrom = this.state.from;
    const newRefer = this.state.reference;
    this.setState({name: newName});
    this.setState({from: newFrom});
    this.setState({reference: newRefer});
    this.inRussian();
  }

  handleCanadian(event) {
    event.preventDefault();
    const newName = this.state.name;
    const newFrom = this.state.from;
    const newRefer = this.state.reference;
    this.setState({name: newName});
    this.setState({from: newFrom});
    this.setState({reference: newRefer});
    this.inCanadian();
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
          <RaisedButton label="Submit" default={true} style={{marginLeft: 150, marginTop: 10}} onClick={this.handleSubmit} value="Submit" />
          <RaisedButton label="Shout!!" secondary={true} style={{marginLeft: 20, marginTop: 10}} onClick={this.handleShout} value="Submit" />
          <RaisedButton label="Español" default={true} style={{marginLeft: 20, marginTop: 10}} onClick={this.handleSpanish} value="Submit" />
          <RaisedButton label="Français" default={true} style={{marginLeft: 20, marginTop: 10}} onClick={this.handleFrench} value="Submit" />
          <RaisedButton label="Deutsch" default={true} style={{marginLeft: 20, marginTop: 10}} onClick={this.handleGerman} value="Submit" />
          <RaisedButton label="한국어" default={true} style={{marginLeft: 20, marginTop: 10}} onClick={this.handleKorean} value="Submit" />
          <RaisedButton label="Русский" default={true} style={{marginLeft: 20, marginTop: 10}} onClick={this.handleRussian} value="Submit" />
          <RaisedButton label="Canadian" default={true} style={{marginLeft: 20, marginTop: 10}} onClick={this.handleCanadian} value="Submit" />
        </form><br />
        <a className="twitterButton" 
          href={`https://twitter.com/intent/tweet?text=${this.state.message}%20${this.state.subtitle}`} 
          target="_blank"><img src={tweet} alt={'Twitter Button'} style={{marginLeft: 45}}></img></a>
      </div>
    );
  }
}
export default Field;
