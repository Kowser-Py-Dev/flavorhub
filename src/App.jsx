import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Menus from "./components/Menus/Menus";
import Booking from "./components/Booking/Booking";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import "./index.scss";

const App = () => {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="menus" element={<Menus />} />
                  <Route path="about" element={<About />} />
                  <Route path="book" element={<Booking />} />
                  <Route path="*" element={<ErrorPage />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
};

export default App;
