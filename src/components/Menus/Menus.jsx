import React, { useState } from "react";
import Card from "./Card";
import "./Menus.scss";
import { menuApi } from "../../Api";

const Menus = () => {
   const [items, setItems] = useState(menuApi);
   const [activeBtn, setActiveBtn] = useState("all");
   const categories = [
      "all",
      ...new Set(
         menuApi.map((item) => {
            return item.category;
         })
      ),
   ];

   const filterItems = (cate) => {
      const updateItems = menuApi.filter((item) => {
         return item.category === cate;
      });
      if (cate === "all") {
         setItems(menuApi);
      } else {
         setItems(updateItems);
      }
      setActiveBtn(cate);
   };
   return (
      <section className="menu__section spad">
         <div className="section__heading">
            <span className="sub__heading">Food Menu</span>
            <h3>Most Popular Items</h3>
            <div className="container">
               <div className="filter__btns">
                  {categories.map((item, index) => {
                     return (
                        <button
                           key={index}
                           className={`btn__v ${
                              activeBtn == item ? "active" : ""
                           }`}
                           onClick={() => {
                              filterItems(item);
                           }}
                        >
                           {item}
                        </button>
                     );
                  })}
               </div>
               <div className="menu__container">
                  {items.map((item) => {
                     return (
                        <Card
                           key={item.id}
                           name={item.name}
                           img={item.img}
                           dec={item.dec}
                           price={item.price}
                           prePrice={item.prePrice}
                        />
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Menus;
