import React, { Component } from "react";
import "./app.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    });
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  leadingZero(num) {
    if (num < 10) return "0" + num;
    else return num;
  }

  render() {
    return (
      <div>
        <ul style={{ listStyleType: "none" }}>
          <li className="clock-days anime">
            <h3>{this.leadingZero(this.state.days)} Days </h3>
          </li>
          <li className="clock-hours anime">
            <h3>{this.leadingZero(this.state.hours)} Hours </h3>
          </li>
          <li className="clock-minutes anime">
            <h3>{this.leadingZero(this.state.minutes)} Minutes </h3>
          </li>
          <li className="clock-seconds anime">
            <h3>{this.leadingZero(this.state.seconds)} Seconds </h3>
          </li>
        </ul>
      </div>
    );
  }
}

export default Clock;
