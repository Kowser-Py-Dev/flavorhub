import React from "react";
import Card from "./Card";
import "./Services.scss";
import { FaUserTie, FaCartPlus, FaHeadset } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";

const Services = () => {
   return (
      <>
         <section className="servies__section spad">
            <div className="container">
               <div className="section__heading">
                  <span className="sub__heading">Our Services</span>
                  <h3>Explore Our Services</h3>
               </div>
               <div className="service__container grid">
                  <Card icon={<FaUserTie />} title={"Master Chefs"} />
                  <Card icon={<ImSpoonKnife />} title={"Quality Food"} />
                  <Card icon={<FaCartPlus />} title={"online order"} />
                  <Card icon={<FaHeadset />} title={"24/7 Service"} />
               </div>
            </div>
         </section>
      </>
   );
};

export default Services;
