import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
   return (
      <nav className="nav">
         <ul className="nav-list">
            <li className="nav-list-item home">
               <NavLink to="/">home</NavLink>
            </li>
            <li className="nav-list-item">
               <NavLink to="/about">über uns</NavLink>
            </li>
            <li className="nav-list-item">
               <NavLink to="/contact">kontakt</NavLink>
            </li>
         </ul>
      </nav>
   );
};

export default Nav;
