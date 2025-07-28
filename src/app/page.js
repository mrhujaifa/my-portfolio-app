import React from "react";
import Hero from "./{My-app}/Hero/Hero";
import Footer from "./{My-app}/Footer/Footer";
import Test from "./Test/text";

const page = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Hero></Hero>
      </div>
      {/* <div className="container mx-auto">
        <Test></Test>
      </div> */}
    </div>
  );
};

export default page;
