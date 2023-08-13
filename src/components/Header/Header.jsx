import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; // Using useNavigate instead of useHistory
import { ImSpoonKnife } from "react-icons/im";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Header.scss";

const Header = () => {
   const [stickyHeader, setStickyHeader] = useState(false);
   const [slider, setSlider] = useState(false);

   const navigate = useNavigate();

   const getOffSet = () => {
      const offSet = window.scrollY;
      if (offSet > 150) {
         setStickyHeader(true);
      } else {
         setStickyHeader(false);
      }
   };
   useEffect(() => {
      window.addEventListener("scroll", getOffSet);
      return () => {
         window.removeEventListener("scroll", getOffSet);
      };
   }, []);

   const handleNavLinkClick = () => {
      setSlider(false);
      window.scrollTo(0, 0);
   };

   return (
      <header className={`header ${stickyHeader ? "stickyHeader" : ""}`}>
         <div className="container flex__sb">
            <div className="logo__container">
               <Link to="/">
                  <ImSpoonKnife />
                  <h1>flavor hub</h1>
               </Link>
            </div>
            <ul className={`main__menu ${slider ? "slider" : ""}`}>
               <li onClick={handleNavLinkClick}>
                  <NavLink to="/">home</NavLink>
               </li>
               <li onClick={handleNavLinkClick}>
                  <NavLink to={"/menus"}>menus</NavLink>
               </li>
               <li onClick={handleNavLinkClick}>
                  <NavLink to={"/about"}>about</NavLink>
               </li>
               <li onClick={handleNavLinkClick}>
                  <NavLink to={"/book"} className="btn__v">
                     book a table
                  </NavLink>
               </li>
            </ul>
            <div
               className="mobile__menu"
               onClick={() => {
                  setSlider(!slider);
               }}
            >
               {slider ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
         </div>
      </header>
   );
};

export default Header;
