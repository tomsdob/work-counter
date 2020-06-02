import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Timer from "../components/Timer";

const Index = () => {
  return (
    <div className="font-sans antialiased">
      <Head>
        <title>Count your work time ⌛</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="mx-auto py-8 px-4 flex justify-center items-center h-screen w-full max-w-screen-sm">
        <Header />
        <Timer />
      </div>
    </div>
  );
};

export default Index;
