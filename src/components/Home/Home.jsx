import React from "react";
import Banner from "../Banner/Banner";
import Offer from "../Offer/Offer";
import Services from "../Services/Services";
import About from "../About/About";
import Chefs from "../Chefs/Chefs";
import Booking from "../Booking/Booking";

const Home = () => {
   return (
      <>
         <Banner />
         <Offer />
         <Services />
         <About />
         <Chefs />
         <Booking />
      </>
   );
};

export default Home;
