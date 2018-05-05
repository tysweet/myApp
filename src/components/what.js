import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';
import tweet from '../img/tweet.png';

class What extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      from: 'Mom',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShout = this.handleShout.bind(this);
  }

  componentDidMount() {
    const from = this.state.from;
    fetch(`http://foaas.com/what/${from}`, {
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
    const from = this.state.from;
    fetch(`http://foaas.com/what/${from}?shoutcloud`, {
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


  handleShout(event) {
    event.preventDefault();
    const newFrom = this.state.from;
    this.setState({from: newFrom});
    this.componentWillShout();
  }



  render() {
    return (
      <div style={{marginTop: 20}}>
        <a id="what"></a>
        <div className="container">
          <h1>{this.state.message}</h1>
          <h3>{this.state.subtitle}</h3>
          <form>
            <label style={{marginLeft: 92}}>
              Change From:
              <input name="from" className="from" type="input" style={{margin: 5}}
                onChange={this.handleChange} />
            </label><br />
            <RaisedButton label="Submit" default={true} style={{marginLeft: 110, marginTop: 10}} onClick={this.handleSubmit} value="Submit" />
            <RaisedButton label="Shout!!" secondary={true} style={{marginLeft: 20, marginTop: 10}} onClick={this.handleShout} value="Submit" />
          </form><br/>
            <a className="twitterButton" 
            href={`https://twitter.com/intent/tweet?text=${this.state.message}%20${this.state.subtitle}`} 
            target="_blank"><img src={tweet} alt={'Twitter Button'}></img></a>
        </div>
      </div>
    );
  }
}
export default What;
