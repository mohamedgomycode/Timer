import React from "react";
import "./Temps.css";

class Temps extends React.Component {
  constructor() {
    super();
    this.state = {
      i: 0,
      status: false,
      runningTime: 0,
      seconds: 0,
      hours: 0,
      minutes: 0
    };
    setInterval(() => {
      if (this.state.status) {
        this.setState({
          runningTime: this.state.runningTime + 100
        });
        this.msToHMS(this.state.runningTime);
      }
    }, 100);
  }
  incre = () => {
    if (this.state.i < 9) {
      this.setState({ i: (this.state.i += 1) });
    }
  };

  msToHMS = ms => {
    this.setState({
      hours: Math.floor(ms / 3600000),
      minutes: Math.floor((ms - this.state.hours * 3600000) / 60000),
      seconds: parseInt(
        (ms - this.state.hours * 3600000 - this.state.minutes * 60000) / 1000
      )
    });
  };

  Click = () => {
    this.setState({ status: !this.state.status });
  };

  Reset = () => {
    this.setState({
      status: false,
      runningTime: 0,
      seconds: 0,
      hours: 0,
      minutes: 0
    });
  };

  render() {
    return (
      <div className="container-time">
        <div className="time">
          <div className="hour">
            <h2>{String(this.state.hours).padStart(2, "0")} :</h2>
            <p className="p">hours</p>
          </div>
          <div className="min">
            <h2>{String(this.state.minutes).padStart(2, "0")} :</h2>
            <p className="p">Minute</p>
          </div>
          <div className="sec">
            <h2>{String(this.state.seconds).padStart(2, "0")}</h2>
            <p className="p">second</p>
          </div>
        </div>
        <div>
          <button className="button" onClick={this.Click}>
            {this.state.status ? "Stop" : "Start"}
          </button>
          <button className="button" onClick={this.Reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}
export default Temps;
