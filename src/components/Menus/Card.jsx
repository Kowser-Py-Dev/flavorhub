import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, img, dec, price, prePrice }) => {
   return (
      <div className="mn__card">
         <div className="mn__img">
            <img src={img} alt="" />
         </div>
         <div className="mn__info">
            <span className="name">{name}</span>
            <p>{dec}</p>
            <div className="options">
               <div className="price">
                  $<del>{prePrice}</del>
                  <span>{price}</span>
               </div>
               <div className="">
                  <Link className="btn">order now</Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Card;
