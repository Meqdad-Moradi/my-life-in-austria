import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./assets/style/style.css";
import Notfound from "./global/Notfound";
import Home from "./home/Home";
import Berufausbildung from "./sprache-und-bildung/Berufausbildung";
import Einleitung from "./sprache-und-bildung/Einleitung";
import Erwachsenenbildung from "./sprache-und-bildung/Erwachsenenbildung";
import RechtePflicht from "./sprache-und-bildung/RechtePflicht";
import Sprache from "./sprache-und-bildung/Sprache";
import SpracheUndBildung from "./sprache-und-bildung/SpracheUndBildung";

function App() {
   return (
      <Routes>
         <Route path="/home" element={<Navigate to="/" />} />
         <Route path="/" element={<Home />} />
         <Route path="/spracheundbildung" element={<SpracheUndBildung />}>
            <Route path="einleitung" element={<Einleitung />} />
            <Route path="sprache" element={<Sprache />} />
            <Route path="berufsausbildung" element={<Berufausbildung />} />
            <Route path="erwachsenenbildung" element={<Erwachsenenbildung />} />
            <Route path="recht-pflicht" element={<RechtePflicht />} />
         </Route>
         <Route path="*" element={<Notfound />} />
      </Routes>
   );
}

export default App;
