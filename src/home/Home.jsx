import React from "react";
import Footer from "../global/Footer";
import Header from "../global/Header";
import Notice from "../global/Notice";
import Showcase from "./Showcase";

const Home = () => {
   return (
      <>
         <Header />
         <Showcase />
         <Notice />
         <Footer />
      </>
   );
};

export default Home;
