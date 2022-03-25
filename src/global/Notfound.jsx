import React from "react";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
   const navigate = useNavigate();
   return (
      <div className="notfound">
         <div className="container">
            <p>error</p>
            <h1>404</h1>
            <h3>Oops! Your page was not found!</h3>
            <button className="btn" onClick={() => navigate("/")}>
               go home
            </button>
         </div>
      </div>
   );
};

export default Notfound;
