import React, { Component } from 'react';
// import TimePicker from 'react-time-picker';
import TimePicker from 'react-bootstrap-time-picker'


class TimePick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '01:00'
    };
  }

  render() {
    return (
      <div>
        <TimePicker
          start="0:00"
          end="23:59"
          step={10}
          value={this.state.time}
          onChange={(time) => this.setState({ time })}
        />
      </div>
    );
  }
}

export default TimePick;

