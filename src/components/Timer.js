import React, { Component } from "react";
import Cookies from "universal-cookie";
import moment from "moment";
import { motion } from "framer-motion";
import { fadeLeftIn, staggerFast } from "../assets/animations/animations";

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
    const { working, workMinutes, workHours } = this.state;
    return (
      <motion.div
        initial="initial"
        animate="animate"
        className="p-6 flex flex-col justify-start items-center text-center w-full bg-white rounded-lg shadow-xl"
      >
        {working ? (
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerFast}
            className="flex flex-col"
          >
            <motion.span
              variants={fadeLeftIn}
              className="mb-3 text-6xl font-bold leading-none text-gray-800"
            >
              {workHours}h {workMinutes}min
            </motion.span>
            <motion.span
              variants={fadeLeftIn}
              className="mb-4 text-base font-normal leading-none text-gray-600"
            >
              {working ? `Time at work` : null}
            </motion.span>
          </motion.div>
        ) : null}
        <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ y: -1, scale: 0.95 }}
          variants={fadeLeftIn}
          onClick={() => this.toggleWork()}
          className={`${
            working
              ? "hover:bg-red-100 border-red-500 hover:border-red-600 text-red-500 hover:text-red-600"
              : "hover:bg-green-100 border-green-500 hover:border-green-600 text-green-500 hover:text-green-600"
          } px-4 py-3 text-base font-semibold text-white border bg-white rounded-lg hover:shadow-lg focus:outline-none`}
        >
          {working ? "Stop working 🎉" : "Start working ⚡"}
        </motion.button>
      </motion.div>
    );
  }
}
