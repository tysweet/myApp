import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    stories: []
  }
  componentDidMount() {
    fetch('http://www.foaas.com/').then((res) => {
      res.json().then((operations) => {
        // operations.slice(0, 50).forEach((operations) => {
          // fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`).then((res) => {
          //   res.json().then((story) => {
          //     console.log(story);
          //     const storyAccess = this.state.stories
          //     storyAccess.push(story.title)
          //     this.setState({
          //       stories: storyAccess
          //     });
          //   });
          // });
        // });
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


export default App;
