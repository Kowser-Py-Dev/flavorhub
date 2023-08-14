import React, { useEffect, useState } from "react";
import "./GoToTop.scss";
import { BsArrowUp } from "react-icons/bs";

const GoToTop = () => {
   const [visible, setVisible] = useState(false);

   const getOffSet = () => {
      const offSetY = window.scrollY;
      if (offSetY > 200) {
         setVisible(true);
      } else {
         setVisible(false);
      }
   };

   useEffect(() => {
      window.addEventListener("scroll", getOffSet);
   }, []);

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };
   return (
      <>
         {visible ? (
            <div className="go__to__top" onClick={scrollToTop}>
               <BsArrowUp />
            </div>
         ) : (
            ""
         )}
      </>
   );
};

export default GoToTop;
