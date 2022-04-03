import React from "react";
import Footer from "../global/Footer";
import Header from "../global/Header";
import Notice from "../global/Notice";
import Bundesminister from "./Bundesminister";
import Geselschaftsfuhrer from "./Geselschaftsfuhrer";
import Showcase from "./Showcase";

const Home = () => {
   return (
      <>
         <Header />
         <Showcase />
         <Notice />
         <Bundesminister />
         <Geselschaftsfuhrer />
         <Footer />
      </>
   );
};

export default Home;
