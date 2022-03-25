import React from "react";

const MinTitle = ({ mainTitle, subTitle }) => {
   return (
      <div className="main-title">
         <h1 className="title">{mainTitle}</h1>
         <p className="sub-title">{subTitle}</p>
      </div>
   );
};

export default MinTitle;
