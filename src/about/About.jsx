import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../global/Footer";
import Header from "../global/Header";
import AboutDetails from "./AboutDetails";

const About = () => {
   const [activeTab, setActiveTab] = useState(false);

   const changeActiveTab = () => {
      setActiveTab(true);
   };
   return (
      <>
         <Header />
         <main className="about-page">
            <div className="container">
               <div className="content">
                  <div className="filter-btns">
                     <NavLink
                        className="filter-btn"
                        to="about-details"
                        onClick={changeActiveTab}
                     >
                        About
                     </NavLink>
                     <NavLink
                        className="filter-btn"
                        to="mession"
                        onClick={changeActiveTab}
                     >
                        Mession
                     </NavLink>
                     <NavLink
                        className="filter-btn"
                        to="vision"
                        onClick={changeActiveTab}
                     >
                        Vision
                     </NavLink>
                  </div>
                  <div className="about-details">
                     {activeTab ? <Outlet /> : <AboutDetails />}
                  </div>
               </div>
               <div className="img-box">
                  <img
                     src="https://images.unsplash.com/photo-1597086831879-756db15e81d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXVzdHJpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                     alt="about-us"
                  />
               </div>
            </div>
         </main>
         <Footer />
      </>
   );
};

export default About;
