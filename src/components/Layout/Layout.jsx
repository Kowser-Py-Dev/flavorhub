import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import GoToTop from "../GoToTop/GoToTop";
const Layout = () => {
   return (
      <>
         <GoToTop />
         <Header />
         <Outlet />
         <Footer />
      </>
   );
};

export default Layout;
