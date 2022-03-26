import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./assets/style/style.css";
import Notfound from "./global/Notfound";
import Home from "./home/Home";
import Berufausbildung from "./sprache-und-bildung/Berufausbildung";
import Erwachsenenbildung from "./sprache-und-bildung/Erwachsenenbildung";
import RechtePflicht from "./sprache-und-bildung/RechtePflicht";
import SEinleitung from "./sprache-und-bildung/sEinleitung";
import Sprache from "./sprache-und-bildung/Sprache";
import SpracheUndBildung from "./sprache-und-bildung/SpracheUndBildung";

function App() {
   return (
      <>
         <Routes>
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/spracheundbildung" element={<SpracheUndBildung />}>
               <Route path="seinleitung" element={<SEinleitung />} />
               <Route path="sprache" element={<Sprache />} />
               <Route path="berufsausbildung" element={<Berufausbildung />} />
               <Route
                  path="erwachsenenbildung"
                  element={<Erwachsenenbildung />}
               />
               <Route path="recht-pflicht" element={<RechtePflicht />} />
            </Route>
            <Route path="*" element={<Notfound />} />
         </Routes>
      </>
   );
}

export default App;
