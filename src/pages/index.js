import React from "react";
import Head from "next/head";
import Timer from "../components/Timer";

const Index = () => {
  return (
    <>
      <Head>
        <title>Work Counter</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex justify-center items-center h-screen w-full">
        <Timer />
      </div>
    </>
  );
};

export default Index;
