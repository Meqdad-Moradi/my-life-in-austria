import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Footer from "../global/Footer";
import Header from "../global/Header";
import AboutDetails from "./AboutDetails";

const About = () => {
   const location = useLocation();
   return (
      <>
         <Header />
         <main className="about-page">
            <div className="container">
               <div className="content">
                  <div className="filter-btns">
                     <NavLink className="filter-btn" to="about-details">
                        About
                     </NavLink>
                     <NavLink className="filter-btn" to="mession">
                        Mession
                     </NavLink>
                     <NavLink className="filter-btn" to="vision">
                        Vision
                     </NavLink>
                  </div>
                  <div className="about-details">
                     {location.pathname === "/about" ? (
                        <AboutDetails />
                     ) : (
                        <Outlet />
                     )}
                  </div>
               </div>
            </div>
         </main>
         <Footer />
      </>
   );
};

export default About;
