import React from 'react';

class From extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <p><span>From:<input className='from' type="text" value={this.state.value}
          onChange={this.handleChange} /></span></p>
      </div>
    );
  }
}
export default From;
