import React from 'react';

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      name: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const newName = this.props.name;
    console.log(newName);
    newName.push(this.state.value);
    console.log(this.state.value);
    this.setState({name: newName});
    console.log(newName);
  }

  render() {
    return (
      <div>
        <p><span>First Name:<input className="name" type="text" value={this.state.value}
          onChange={this.handleChange}/></span></p>

      </div>
    );
  }
}
export default Name;
