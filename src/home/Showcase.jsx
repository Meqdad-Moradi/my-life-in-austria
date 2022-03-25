import React from "react";
import { useNavigate } from "react-router-dom";

const Showcase = () => {
   const navigate = useNavigate();
   return (
      <div>
         <button onClick={() => navigate("/")}>go home</button>
      </div>
   );
};

export default Showcase;
