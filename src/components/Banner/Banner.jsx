import React from "react";
import { Link } from "react-router-dom";
import "./Banner.scss";
import BgImg from "../../../public/images/banner.png";

const Banner = () => {
   return (
      <main className="banner__section">
         <div className="overlay"></div>
         <div className="container flex__sb">
            <div className="banner__text">
               <h1>Taste the Extraordinary</h1>
               <p>
                  "Delicious Eats Await! Indulge in a Culinary Delight at Our
                  Restaurant. Savory Flavors, Exceptional Service, and
                  Unforgettable Memories. Come Dine with Us Today!"
               </p>
               <Link className="btn">order now</Link>
            </div>
            <div className="banner__img">
               <img src={BgImg} alt="" />
            </div>
         </div>
      </main>
   );
};

export default Banner;
