import React from "react";
import "./Booking.scss";
import { Link } from "react-router-dom";
const Booking = () => {
   return (
      <section className="booking__section spad">
         <div className="container">
            <div className="section__heading">
               <span className="sub__heading">Reservation</span>
               <h3>Book A Table Online</h3>
            </div>
            <div className="form__container">
               <form action="" className="form">
                  <div className="form__group name">
                     <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="form__group email">
                     <input type="email" placeholder="Your Email" />
                  </div>
                  <div className="form__group time">
                     <input type="datetime-local" placeholder="Date & Time" />
                  </div>
                  <div className="form__group select">
                     <select name="" id="">
                        <option disabled selected value="dis">
                           Num Of People
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                     </select>
                  </div>
                  <div className="form__group textarea">
                     <textarea placeholder="Your Epecail Request"></textarea>
                  </div>
                  <Link to={"/"} className="btn">
                     submit
                  </Link>
               </form>
               <div className="col">
                  <p>
                     <span>Welcome to Flavor Hub</span> <br />
                     <br />
                     "Experience culinary excellence at Flavor Hub, where
                     delectable dishes and a cozy ambiance await you. Whether
                     it's a romantic dinner for two or a gathering of friends,
                     reserving a table has never been easier. Our dedicated team
                     is ready to ensure your dining experience is nothing short
                     of exceptional. Secure your spot now and indulge in a
                     symphony of flavors that will tantalize your taste buds and
                     create cherished memories."
                     <br />
                     <br />
                     Feel free to adjust and personalize this description to
                     match the tone and style of your website and restaurant.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Booking;
