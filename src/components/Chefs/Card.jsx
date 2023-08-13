import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const Card = ({ name, image, position, about }) => {
   return (
      <>
         <div className="chef">
            <div className="chef__img">
               <img src={image} alt="" />
            </div>
            <div className="chef__info">
               <h5>{name}</h5>
               <h6>{position}</h6>
               <p>{about}</p>
            </div>
            <div className="chef__socail">
               <Link>
                  <FaFacebookF />
               </Link>
               <Link>
                  <FaTwitter />
               </Link>
               <Link>
                  <AiFillInstagram />
               </Link>
            </div>
         </div>
      </>
   );
};

export default Card;
