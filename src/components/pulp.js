import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';

class Pulp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      language: 'Swahili',
      from: 'Jules',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const language = this.state.language;
    const from = this.state.from;
    fetch(`http://foaas.com/pulp/${language}/${from}?shoutcloud`, {
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
    const newLang = this.state.language;
    const newFrom = this.state.from;
    this.setState({name: newLang});
    this.setState({from: newFrom});
    this.componentDidMount();
  }



  render() {
    return (
      <div style={{marginTop: 20}}>
        <form>
          <label style={{marginLeft: 38}}>
            Language:
            <input name="language" className="language" type="input" style={{margin: 5}}
              onChange={this.handleChange} />
          </label>
          <br />
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
        </div>
      </div>
    );
  }
}
export default Pulp;
