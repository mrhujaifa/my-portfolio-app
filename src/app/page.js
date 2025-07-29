import React from "react";
import Hero from "./{My-app}/Hero/Hero";
import Footer from "./{My-app}/Footer/Footer";
import Test from "./Test/text";
import About from "./{My-app}/about/about";
import Services from "./Components/Services";



const page = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Hero></Hero>
      </div>
      
      <div>
        <About></About>
      </div>
      <div>
        <Services></Services>
      </div>
      
      {/* <div className="container mx-auto">
        <Test></Test>
      </div> */}
    </div>
  );
};

export default page;
