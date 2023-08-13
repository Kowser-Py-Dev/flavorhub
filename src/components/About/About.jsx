import React from "react";
import "./About.scss";
import { Link } from "react-router-dom";
import { ImSpoonKnife } from "react-icons/im";
const About = () => {
   return (
      <section className="about__us__section spad">
         <div className="container flex__sb">
            <div className="about__img">
               <img src="./images/about_us.jpg" alt="aboutImg" />
            </div>
            <div className="about__text">
               <div className="">
                  <h3>about us -</h3>
                  <p>
                     <span>
                        Welcome to Flavor Hub
                        <ImSpoonKnife />
                     </span>
                     <br /> Where taste knows no bounds. At our restaurant,
                     we're dedicated to crafting culinary experiences that
                     linger on your palate and in your memory.
                     <br /> <br />
                     chefs blend local ingredients with global inspiration,
                     resulting in dishes that are as unique as they are
                     delicious. Join us for a journey through flavors that will
                     redefine your appreciation for food
                  </p>
                  <Link className="btn">read more..</Link>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
