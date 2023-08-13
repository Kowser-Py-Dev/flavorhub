import React from "react";
import { FaUserTie } from "react-icons/fa";

const Card = ({ icon, title }) => {
   return (
      <div className="s__card">
         {icon}
         <h3>{title}</h3>
         <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ad aut
            placeat recusandae minima iusto.
         </p>
      </div>
   );
};

export default Card;
