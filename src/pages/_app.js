import React from "react";
import App from "next/app";
import "../css/tailwind.css";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return <Component {...pageProps} key={router.route} />;
  }
}

export default MyApp;
