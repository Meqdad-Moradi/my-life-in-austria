import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./assets/style/style.css";
import Notfound from "./global/Notfound";
import Home from "./home/Home";
import Showcase from "./home/Showcase";

function App() {
   return (
      <Routes>
         <Route path="/home" element={<Navigate to="/" />} />
         <Route path="/" element={<Home />} />
         <Route path="/showcase" element={<Showcase />} />
         <Route path="*" element={<Notfound />} />
      </Routes>
   );
}

export default App;
