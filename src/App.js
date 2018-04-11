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
import CanIUse from './components/canIUse.js';
import Chainsaw from './components/chainsaw.js';
import Cocksplat from './components/cocksplat.js';
import Cool from './components/cool.js';
import Cup from './components/cup.js';
import Dalton from './components/dalton.js';
import Deraadt from './components/deraadt.js';
import Diabetes from './components/diabetes.js';
// import DoSomething from './components/doSomething.js';
import Everyone from './components/everyone.js';
import Everything from './components/everything.js';
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
        <CanIUse /><Divider />
        <Chainsaw /><Divider />
        <Cocksplat /><Divider />
        <Cool /><Divider />
        <Cup /><Divider />
        <Dalton /><Divider />
        <Deraadt /><Divider />
        <Diabetes /><Divider />
        {/* <DoSomething /><Divider /> */}
        <Everyone /><Divider />
        <Everything /><Divider />
        <Off /><Divider />
      </div>
    );
  }
}

export default App;
