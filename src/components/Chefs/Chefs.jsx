import React from "react";
import "./Chefs.scss";
import Card from "./Card";
import { chefsApi } from "../../Api";

const Chefs = () => {
   return (
      <>
         <section className="chefs__section spad">
            <div className="section__heading">
               <span className="sub__heading">chef</span>
               <h3>our master chefs</h3>
            </div>
            <div className="container grid">
               {chefsApi.map((item) => {
                  return (
                     <Card
                        key={item.id}
                        name={item.name}
                        image={item.image}
                        position={item.position}
                        about={item.about}
                     />
                  );
               })}
            </div>
         </section>
      </>
   );
};

export default Chefs;
