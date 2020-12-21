import React, { Component } from "react";
import Clock from "./clock";
import "./app.css";
import { Form, FormControl, Button } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "December 25, 2020",
    };
  }

  currentValue = "";

  changeDate = (e) => {
    this.currentValue = e.target.value;
    e.preventDefault();
  };

  setDate = (e) => {
    this.setState({
      deadline: this.currentValue,
    });
    e.target.value = null;
  };

  revertToOriginal = () => {
    this.setState({
      deadline: "December 25, 2020",
    });
  };

  render() {
    return (
      <div className="App">
        <header>Merry Christmas 🎅 From Code With Akky family</header>
        <div className="container">
          <div className="form">
            <h1 className="App-title"> Countdown to {this.state.deadline} </h1>
            <div>
              <Clock deadline={this.state.deadline} />
              <Form inline>
                <FormControl
                  type="text"
                  onChange={this.changeDate}
                  placeholder="New Date"
                  className="deadline-input"
                />
                <br />
                <Button className="form__button btb" onClick={this.setDate}>
                  {" "}
                  Submit{" "}
                </Button>
                <Button
                  className="form__revert btn"
                  onClick={this.revertToOriginal}
                >
                  {" "}
                  Revert{" "}
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
