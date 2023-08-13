import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GoToTop from "../GoToTop/GoToTop";
import { Outlet } from "react-router-dom";

const Layout = () => {
   return (
      <>
         <Header />
         <Outlet />
         <Footer />
         <GoToTop />
      </>
   );
};

export default Layout;
