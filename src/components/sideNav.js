import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import '../App.css';

export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <div className='menuButton' style={{cursor: "pointer"}} onClick={this.handleToggle}>
          The Freaking Menu
          {/* <img className = 'middleFinger' src={ require(`./img/1f595.png`) }  
             onClick={this.handleToggle} />
          Fucking
           <img className = 'middleFinger' src={ require(`./img/1f595.png`) } 
             onClick={this.handleToggle} />
          Menu*/}
        </div>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
          <MenuItem onClick={this.handleClose} href="#icehole">Icehole</MenuItem>
          <MenuItem onClick={this.handleClose} href="#awesome">Awesome</MenuItem>
          <MenuItem onClick={this.handleClose} href="#back">Back</MenuItem>
          <MenuItem onClick={this.handleClose} href="#bag">Bag</MenuItem>
          <MenuItem onClick={this.handleClose} href="#bday">Birthday</MenuItem>
          <MenuItem onClick={this.handleClose} href="#because">Because</MenuItem>
          {/*<MenuItem onClick={this.handleClose} href="#blackadder">Black Adder</MenuItem>*/}
          <MenuItem onClick={this.handleClose} href="#bucket">Bucket</MenuItem>
          <MenuItem onClick={this.handleClose} href="#caniuse">Can I Use?</MenuItem>
          <MenuItem onClick={this.handleClose} href="#chainsaw">Chainsaw</MenuItem>
          <MenuItem onClick={this.handleClose} href="#cool">Cool</MenuItem>
          <MenuItem onClick={this.handleClose} href="#cup">Cup</MenuItem>
          <MenuItem onClick={this.handleClose} href="#dalton">Dalton</MenuItem>
          <MenuItem onClick={this.handleClose} href="#diabetes">Diabetes</MenuItem>
          <MenuItem onClick={this.handleClose} href="#dosomething">Do Something</MenuItem>
          <MenuItem onClick={this.handleClose} href="#everyone">Everyone</MenuItem>
          <MenuItem onClick={this.handleClose} href="#everything">Everything</MenuItem>
          {/* <MenuItem onClick={this.handleClose} href="#family">Family</MenuItem> */}
          <MenuItem onClick={this.handleClose} href="#fascinating">Fascinating</MenuItem>
          <MenuItem onClick={this.handleClose} href="#field">Field</MenuItem>
          <MenuItem onClick={this.handleClose} href="#flying">Flying</MenuItem>
          <MenuItem onClick={this.handleClose} href="#fyyff">F.Y.Y.F.F.</MenuItem>
          <MenuItem onClick={this.handleClose} href="#gfy">G.F.Y.</MenuItem>
          <MenuItem onClick={this.handleClose} href="#give">Give</MenuItem>
          <MenuItem onClick={this.handleClose} href="#greed">Greed</MenuItem>
          <MenuItem onClick={this.handleClose} href="#horse">Horse</MenuItem>
          <MenuItem onClick={this.handleClose} href="#immensity">Immensity</MenuItem>
          <MenuItem onClick={this.handleClose} href="#ing">-ing</MenuItem>
          <MenuItem onClick={this.handleClose} href="#keep">Keep</MenuItem>
          <MenuItem onClick={this.handleClose} href="#keepcalm">Keep Calm</MenuItem>
          <MenuItem onClick={this.handleClose} href="#king">King</MenuItem>
          <MenuItem onClick={this.handleClose} href="#life">Life</MenuItem>
          <MenuItem onClick={this.handleClose} href="#linus">Linus</MenuItem>
          <MenuItem onClick={this.handleClose} href="#look">Look</MenuItem>
          <MenuItem onClick={this.handleClose} href="#looking">Looking</MenuItem>
          <MenuItem onClick={this.handleClose} href="#madison">Madison</MenuItem>
          <MenuItem onClick={this.handleClose} href="#maybe">Maybe</MenuItem>
          <MenuItem onClick={this.handleClose} href="#me">Me</MenuItem>
          <MenuItem onClick={this.handleClose} href="#mornin">Mornin'</MenuItem>
          <MenuItem onClick={this.handleClose} href="#no">No</MenuItem>
          {/* <MenuItem onClick={this.handleClose} href="#nugget">Nugget</MenuItem> */}
          <MenuItem onClick={this.handleClose} href="#off">Off</MenuItem>
          <MenuItem onClick={this.handleClose} href="#offwith">Off With</MenuItem>
          <MenuItem onClick={this.handleClose} href="#outside">Outside</MenuItem>
          <MenuItem onClick={this.handleClose} href="#particular">Particular</MenuItem>
          <MenuItem onClick={this.handleClose} href="#pink">Pink</MenuItem>
          <MenuItem onClick={this.handleClose} href="#problem">Problem</MenuItem>
          <MenuItem onClick={this.handleClose} href="#programmer">Programmer</MenuItem>
          <MenuItem onClick={this.handleClose} href="#pulp">Pulp</MenuItem>
          <MenuItem onClick={this.handleClose} href="#question">Question</MenuItem>
          <MenuItem onClick={this.handleClose} href="#ridiculous">Ridiculous</MenuItem>
          <MenuItem onClick={this.handleClose} href="#rtfm">RTFM</MenuItem>
          <MenuItem onClick={this.handleClose} href="#sake">Sake</MenuItem>
          {/* <MenuItem onClick={this.handleClose} href="#shakespeare">Shakespeare</MenuItem> */}
          <MenuItem onClick={this.handleClose} href="#stuff">Stuff</MenuItem>
          <MenuItem onClick={this.handleClose} href="#shutup">Shut Up</MenuItem>
          <MenuItem onClick={this.handleClose} href="#single">Single</MenuItem>
          <MenuItem onClick={this.handleClose} href="#thanks">Thanks</MenuItem>
          <MenuItem onClick={this.handleClose} href="#that">That</MenuItem>
          <MenuItem onClick={this.handleClose} href="#think">Think</MenuItem>
          <MenuItem onClick={this.handleClose} href="#thinking">Thinking</MenuItem>
          <MenuItem onClick={this.handleClose} href="#this">This</MenuItem>
          <MenuItem onClick={this.handleClose} href="#thumbs">Thumbs</MenuItem>
          <MenuItem onClick={this.handleClose} href="#too">Too</MenuItem>
          <MenuItem onClick={this.handleClose} href="#tucker">Tucker</MenuItem>
          <MenuItem onClick={this.handleClose} href="#what">What</MenuItem>
          <MenuItem onClick={this.handleClose} href="#xmas">XMAS</MenuItem>
          <MenuItem onClick={this.handleClose} href="#yoda">Yoda</MenuItem>
          <MenuItem onClick={this.handleClose} href="#you">You</MenuItem>
          <MenuItem onClick={this.handleClose} href="#zayn">Zayn</MenuItem>
          <MenuItem onClick={this.handleClose} href="#zero">Zero</MenuItem>
        </Drawer>
      </div>
    );
  }
}