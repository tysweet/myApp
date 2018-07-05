import React, { Component } from 'react';
import '../App.css';
import tweet from '../img/tweet.jpg';
import FBshare from '../img/FBshare.jpg';
import slack from '../img/slack.png';

class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      name: 'Jane',
      from: 'Dick',
      reference: 'Fun with Dick and Jane, c. 1946',
      message: '',
      subtitle: '',
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
    this.handleSMS = this.handleSMS.bind(this);
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
      this.setState({message: "And " + name + " said unto " + from + ", 'Verily, cast thine eyes upon the field in which I grow my figs', and " + from + " gave witness unto the field, and saw that it was barren."});
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
      this.setState({message: "AND " + name.toUpperCase() + " SAID UNTO " + from.toUpperCase() + ", 'VERILY, CAST THINE EYES UPON THE FIELD IN WHICH I GROW MY FIGS', AND " + from.toUpperCase() + " GAVE WITNESS UNTO THE FIELD, AND SAW THAT IT WAS BARREN!"});
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
      this.setState({message: "And " + name + " said unto " + from + ", 'Verily, cast thine eyes upon the field in which I grow my figs', and " + from + " gave witness unto the field, and saw that it was, like, so full, eh?"});
      this.setState({subtitle: subtitle + ", eh"});
    })
  }

  sendSMS() {
    const numberField = document.querySelector('input[name=number]');
    const number = numberField.value.replace(/\D/g,''); // Remove all non-numeric chars
    const text = this.state.message + this.state.subtitle;
    fetch('/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({number: number, text: text})
    })
    .then(function(res){ console.log(res) })
    .catch(function(error){ console.log(error)});
  }

   clipboard = str => {
    const el = document.createElement('textarea');
    const message = this.state.message;
    const subtitle = this.state.subtitle;
    el.value = message + " " + subtitle;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';                 
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected =            
      document.getSelection().rangeCount > 0 
        ? document.getSelection().getRangeAt(0)
        : false;
    el.select(); 
    document.execCommand('copy');
    document.body.removeChild(el); 
    if (selected) { 
      document.getSelection().removeAllRanges(); 
      document.getSelection().addRange(selected);
    }
  };


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

  handleSMS(event) {
    event.preventDefault();
    const numberField = document.querySelector('input[name=number]');
    const button = document.querySelector('button[type=button]');
    numberField.addEventListener('keyup', function(e) {
      if ((e.keyCode || e.charCode) === 13) this.sendSMS();
    }, false);
    button.addEventListener('click', this.sendSMS(), false);
  }


  render() {
    return (
      <div style={{marginTop: 20}}>
        <a id="field"></a>
        <div className="container">
            <h1>{this.state.message}</h1>
            <h3>{this.state.subtitle}</h3>
          <form>
            <label style={{marginLeft: 41}}>Change Name:
              <input name="name" className="name" type="input" style={{marginLeft: 10, height: 20}}
                placeholder={this.state.name} onBlur={this.handleChange} />
            </label><br />
            <label style={{marginLeft: 51}}>Change From:
              <input name="from" className="from" type="input" style={{marginLeft: 10, height: 20}}
                placeholder={this.state.from} onBlur={this.handleChange} />
            </label><br />
            <label>Change Reference:
              <input name="reference" className="reference" type="input" style={{marginLeft: 10, height: 20}}
                placeholder={this.state.reference} onBlur={this.handleChange} />
            </label><br />
            <button id="submit" className="submit" style={{marginLeft: 40, marginTop: 20}} onClick={this.handleSubmit}>Submit</button>
            <button id="shout" className="submit" onClick={this.handleShout} >SHOUT!!</button>
            <input type="submit" id="spanish" className="submit" name="submit" alt="In Spanish" value="Spanish" onClick={this.handleSpanish} />
            <input type="submit" id="french" className="submit" name="submit" alt="In French" value="French" onClick={this.handleFrench} />
            <input type="submit" id="german" className="submit" name="submit" alt="In German" value="German" onClick={this.handleGerman} />
            <input type="submit" id="korean" className="submit" name="submit" alt="In Korean" value="Korean" onClick={this.handleKorean} />
            <input type="submit" id="russian" className="submit" name="submit" alt="In Russian" value="Russian" onClick={this.handleRussian} />
            <input type="submit" id="canada" className="submit" name="submit" alt="In Canadian" value="Canadian" onClick={this.handleCanadian} />
          </form><br/>
          <div className="social">
            <label className="textLabel" style={{marginLeft: 92}}>Send as SMS:</label>
            <input className="sms" type="tel" name="number" placeholder="15551234567" required />
            <button id="text" className="text" type="button" onClick={this.handleSMS}>Send</button><br/>
            <button id="clipboard" className="text" type="button" onclick={this.clipboard()}>Copy Text</button>
            <a className="twitterButton"
            href={`https://twitter.com/intent/tweet?text=${this.state.message}%20${this.state.subtitle}`}
            target="_blank"><img src={tweet} alt={'Twitter Button'}></img></a> 
            <a className="facebookButton" href={`https://www.facebook.com/`} target="_blank"><img src={FBshare} alt={'Facebook Button'}></img></a> 
            <a className="slackButton" href={`https://www.slack.com/`} target="_blank"><img src={slack} alt={'Slack Button'}></img></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Field;
