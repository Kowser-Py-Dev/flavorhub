import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, image, discount }) => {
   return (
      <div className="card">
         <div className="card__img">
            <img src={image} alt="" />
         </div>
         <div className="card__info">
            <h3>{title}</h3>
            <h4>
               {discount}% <span>off</span>
            </h4>
            <Link className="btn">order now</Link>
         </div>
      </div>
   );
};

export default Card;
