import React, { Component } from "react";
import Cookies from "universal-cookie";
import moment from "moment";
const cookies = new Cookies();

export default class Timer extends Component {
  state = {
    working: false,
    workHours: moment().diff(moment(cookies.get("Arrived")), "hours"),
    workMinutes: moment
      .utc(
        moment(moment(), "HH:mm:ss").diff(
          moment(cookies.get("Arrived")),
          "HH:mm:ss"
        )
      )
      .format("m"),
  };

  toggleWork() {
    this.setState({ working: !this.state.working });
    if (cookies.get("Arrived") == null) {
      cookies.set("Arrived", moment());
      console.log("Added the arrived cookie!");
    } else {
      cookies.remove("Arrived");
      console.log("Removed the arrived cookie!");
    }
  }

  componentDidMount() {
    if (cookies.get("Arrived") != null) {
      this.setState({ working: true });
      console.log("Working set to true");
    } else {
      this.setState({ working: false });
      console.log("Working set to false");
    }
  }

  render() {
    const { working } = this.state;
    return (
      <div className="text-center">
        <h1 className="text-2xl font-semibold leading-none text-gray-800">
          {working
            ? `Time at work: ${this.state.workHours}h ${this.state.workMinutes}min`
            : "Haven't started working yet"}
        </h1>
        <button
          onClick={() => this.toggleWork()}
          className={`${
            this.state.working
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          } mt-4 px-4 py-3 rounded-lg text-white transition-all duration-200 focus:outline-none focus:shadow-outline`}
        >
          {working ? "Stop working" : "Start working"}
        </button>
      </div>
    );
  }
}
