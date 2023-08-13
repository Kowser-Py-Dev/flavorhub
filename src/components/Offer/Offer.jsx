import React from "react";
import "./Offer.scss";
import Card from "./Card";
import { offerApi } from "../../Api";
const Offer = () => {
   return (
      <section className="spad offer__section">
         <div className="container flex__sb">
            {offerApi.map((item, index) => {
               return (
                  <Card
                     key={item.id}
                     title={item.title}
                     image={item.image}
                     discount={item.discount}
                  />
               );
            })}
         </div>
      </section>
   );
};

export default Offer;
