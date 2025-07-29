import React from "react";
import Hero from "./{My-app}/Hero/Hero";


import About from "./{My-app}/about/about";
import Services from "./Components/Services";
import CallToAction from "./Components/CallToAction";
import Footer from "./Components/Footer";



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
      <div>
        <CallToAction> </CallToAction>
      </div>
      
      {/* <div className="container mx-auto">
        <Test></Test>
      </div> */}
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default page;
