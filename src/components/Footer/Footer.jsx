import React from "react";
import "./Footer.scss";
import { AiFillInstagram } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import {
   FaLocationArrow,
   FaPinterestP,
   FaTwitter,
   FaFacebookF,
   FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <footer className="footer spad">
         <div className="container flex__sb">
            <div className="col company">
               <h3>Company</h3>
               <Link to={"/"}>
                  <BiChevronRight />
                  about us
               </Link>
               <Link to={"/"}>
                  <BiChevronRight />
                  Contact Us
               </Link>
               <Link to={"/"}>
                  <BiChevronRight />
                  Reservation
               </Link>
               <Link to={"/"}>
                  <BiChevronRight />
                  Privacy Policy
               </Link>
            </div>
            <div className="col contact">
               <h3>Contact</h3>
               <p>
                  <FaLocationArrow />
                  123 Street, New York, USA
               </p>
               <p>
                  <FaPhoneAlt />
                  +012-345-67890
               </p>
               <p>
                  <MdEmail />
                  info@example.com
               </p>
               <div className="socail__icons">
                  <Link>
                     <FaFacebookF />
                  </Link>
                  <Link>
                     <FaTwitter />
                  </Link>
                  <Link>
                     <AiFillInstagram />
                  </Link>
                  <Link>
                     <FaPinterestP />
                  </Link>
               </div>
            </div>
            <div className="col opening">
               <h3>Opening</h3>
               <h5>Monday - Saturday </h5>
               <p>08AM - 08PM</p>
               <h5>Sunday</h5>
               <p>10AM - 08PM</p>
            </div>
            <div className="col newsletter">
               <h3>Newsletter</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
               <div className="input__group">
                  <input type="text" placeholder="Your Email" />
                  <button type="submit" className="submit">
                     Submit
                  </button>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
