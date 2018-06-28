import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';
import tweet from '../img/tweet.png';

class CanIUse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      tool: 'the car',
      from: 'Dad',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShout = this.handleShout.bind(this);
    this.handleGerman = this.handleGerman.bind(this);
    this.handleSpanish = this.handleSpanish.bind(this);
    this.handleFrench = this.handleFrench.bind(this);
    this.handleKorean = this.handleKorean.bind(this);
    this.handleRussian = this.handleRussian.bind(this);
    this.handleCanadian = this.handleCanadian.bind(this)
  }

  componentDidMount() {
    const tool = this.state.tool;
    const from = this.state.from;
    fetch(`http://foaas.com/caniuse/${tool}/${from}`, {
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
      this.setState({message: "Can you use " + tool + "?  Heck no!"});
      this.setState({subtitle: subtitle});
    })
  }

  componentWillShout() {
    const tool = this.state.tool;
    const from = this.state.from;
    fetch(`http://foaas.com/caniuse/${tool}/${from}?shoutcloud`, {
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
      this.setState({message: "CAN YOU USE " + tool.toUpperCase() + "?!  HECK NO!!"});
      this.setState({subtitle: subtitle});
    })
  }

  inGerman() {
    const tool = this.state.tool;
    const from = this.state.from;
    fetch(`http://foaas.com/caniuse/${tool}/${from}?shoutcloud&i18n=de`, {
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
    const tool = this.state.tool;
    const from = this.state.from;
    fetch(`http://foaas.com/caniuse/${tool}/${from}?i18n=es`, {
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
    const tool = this.state.tool;
    const from = this.state.from;
    fetch(`http://foaas.com/caniuse/${tool}/${from}?i18n=fr`, {
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
    const tool = this.state.tool;
    const from = this.state.from;
    fetch(`http://foaas.com/caniuse/${tool}/${from}?i18n=ko`, {
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
    const tool = this.state.tool;
    const from = this.state.from;
    fetch(`http://foaas.com/caniuse/${tool}/${from}?i18n=ru`, {
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
    const tool = this.state.tool;
    const from = this.state.from;
    fetch(`http://foaas.com/caniuse/${tool}/${from}`, {
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
      this.setState({message: "Can you use " + tool + "?  Sure, eh?"});
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
    const newTool = this.state.tool;
    const newFrom = this.state.from;
    this.setState({name: newTool});
    this.setState({from: newFrom});
    this.componentDidMount();
  }


  handleShout(event) {
    event.preventDefault();
    const newTool = this.state.tool;
    const newFrom = this.state.from;
    this.setState({name: newTool});
    this.setState({from: newFrom});
    this.componentWillShout();
  }

  handleGerman(event) {
    event.preventDefault();
    const newTool = this.state.tool;
    const newFrom = this.state.from;
    this.setState({name: newTool});
    this.setState({from: newFrom});
    this.inGerman();
  }

  handleSpanish(event) {
    event.preventDefault();
    const newTool = this.state.tool;
    const newFrom = this.state.from;
    this.setState({name: newTool});
    this.setState({from: newFrom});
    this.inSpanish();
  }

  handleFrench(event) {
    event.preventDefault();
    const newTool = this.state.tool;
    const newFrom = this.state.from;
    this.setState({name: newTool});
    this.setState({from: newFrom});
    this.inFrench();
  }

  handleKorean(event) {
    event.preventDefault();
    const newTool = this.state.tool;
    const newFrom = this.state.from;
    this.setState({name: newTool});
    this.setState({from: newFrom});
    this.inKorean();
  }

  handleRussian(event) {
    event.preventDefault();
    const newTool = this.state.tool;
    const newFrom = this.state.from;
    this.setState({name: newTool});
    this.setState({from: newFrom});
    this.inRussian();
  }

  handleCanadian(event) {
    event.preventDefault();
    const newTool = this.state.tool;
    const newFrom = this.state.from;
    this.setState({name: newTool});
    this.setState({from: newFrom});
    this.inCanadian();
  }



  render() {
    return (
      <div style={{marginTop: 20}}>
        <a id="caniuse"></a>
        <div className="container">
          <h1>{this.state.message}</h1>
          <h3>{this.state.subtitle}</h3>
          <form>
            <label style={{marginLeft: 92}}>
              Change From:
              <input name="from" className="from" type="input" style={{margin: 5}}
                onChange={this.handleChange} />
            </label><br />
            <RaisedButton label="Submit" default={true} style={{marginLeft: 110, marginTop: 20}} onClick={this.handleSubmit} value="Submit" />
            <RaisedButton label="Shout!!" secondary={true} style={{marginLeft: 20}} onClick={this.handleShout} value="Submit" />
            <RaisedButton label="Español" default={true} style={{marginLeft: 20}} onClick={this.handleSpanish} value="Submit" />
            <RaisedButton label="Français" default={true} style={{marginLeft: 20}} onClick={this.handleFrench} value="Submit" />
            <RaisedButton label="Deutsch" default={true} style={{marginLeft: 20}} onClick={this.handleGerman} value="Submit" />
            <RaisedButton label="한국어" default={true} style={{marginLeft: 20}} onClick={this.handleKorean} value="Submit" />
            <RaisedButton label="Русский" default={true} style={{marginLeft: 20}} onClick={this.handleRussian} value="Submit" />
            <RaisedButton label="Canadian" default={true} style={{marginLeft: 20}} onClick={this.handleCanadian} value="Submit" />
          </form><br/>
            <a className="twitterButton" 
            href={`https://twitter.com/intent/tweet?text=${this.state.message}%20${this.state.subtitle}`} 
            target="_blank"><img src={tweet} alt={'Twitter Button'}></img></a>
        </div>
      </div>
    );
  }
}
export default CanIUse;
