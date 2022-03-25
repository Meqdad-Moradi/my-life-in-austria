import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
   return (
      <div className="logo">
         <Link to="/">
            Mein Leben in Österreich <small>Chancen und Regeln</small>
         </Link>
      </div>
   );
};

export default Logo;
