import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Anyway from './components/anyway.js';
import Asshole from './components/asshole.js';
import Awesome from './components/awesome.js';
import Back from './components/back.js';
import Bag from './components/bag.js';
import Ballmer from './components/ballmer.js';
import Bday from './components/bday.js';
import Because from './components/because.js';
import BlackAdder from './components/blackadder.js';
import Bucket from './components/bucket.js';
import Off from './components/off.js';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {
    return (
      <div>
        <header><h1>FOAAS</h1></header>
        <Divider />
        <Anyway /><Divider />
        <Asshole /><Divider />
        <Awesome /><Divider />
        <Back /><Divider />
        <Bag /><Divider />
        <Ballmer /><Divider />
        <Bday /><Divider />
        <Because /><Divider />
        <BlackAdder /><Divider />
        <Bucket /><Divider />
        <Off /><Divider />
      </div>
    );
  }
}

export default App;
