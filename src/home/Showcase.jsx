import React from "react";
import {
   FaAccusoft,
   FaAnchor,
   FaBriefcase,
   FaFileMedical,
   FaLanguage,
   FaPeopleCarry,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import map from "./../assets/images/map.png";

const Showcase = () => {
   return (
      <div className="showcase">
         <div className="container">
            <div className="showcase-banner">
               <div className="slogan">
                  <h1 className="title">Mein Leben in Österreich</h1>
                  <h2 className="subtitle">Chancen und Regeln</h2>
                  <a href="#showcase-body" className="btn showcase-banner-btn">
                     Mehr erfahren
                  </a>
               </div>
               <img className="map-img" src={map} alt="map" />
            </div>

            <main className="showcase-body" id="showcase-body">
               <Link to="/spracheundbildung">
                  <article className="showcase-nav">
                     <div className="icon">
                        <FaLanguage />
                     </div>
                     <div className="text">
                        <h1 className="title">
                           stellenwert von Sprachen und Bildung
                        </h1>
                        <p>einleitung</p>
                        <p>sprache</p>
                        <p>mehr erfahren...</p>
                     </div>
                  </article>
               </Link>

               <Link to="/">
                  <article className="showcase-nav">
                     <div className="icon">
                        <FaBriefcase />
                     </div>
                     <div className="text">
                        <h1 className="title">Arbeitswelt und Wirtschaft</h1>
                        <p>einleitung</p>
                        <p>Unterschiedliche Arbeitsformen</p>
                        <p>mehr erfahren...</p>
                     </div>
                  </article>
               </Link>

               <Link to="/">
                  <article className="showcase-nav">
                     <div className="icon">
                        <FaFileMedical />
                     </div>
                     <div className="text">
                        <h1 className="title">Gesundheit</h1>
                        <p>einleitung</p>
                        <p>Allgemeine Information</p>
                        <p>mehr erfahren...</p>
                     </div>
                  </article>
               </Link>

               <Link to="/">
                  <article className="showcase-nav">
                     <div className="icon">
                        <FaPeopleCarry />
                     </div>
                     <div className="text">
                        <h1 className="title">Wohnen und Nachbarschaft</h1>
                        <p>einleitung</p>
                        <p>Hausordnung</p>
                        <p>mehr erfahren...</p>
                     </div>
                  </article>
               </Link>

               <Link to="/">
                  <article className="showcase-nav">
                     <div className="icon">
                        <FaAnchor />
                     </div>
                     <div className="text">
                        <h1 className="title">
                           Prinzipien des Zusammenlebens - rechtliche
                           Integration
                        </h1>
                        <p>einleitung</p>
                        <p>Menschenwürde - durch Grund - und Menschenrechte</p>
                        <p>mehr erfahren...</p>
                     </div>
                  </article>
               </Link>

               <Link to="/">
                  <article className="showcase-nav">
                     <div className="icon">
                        <FaAccusoft />
                     </div>
                     <div className="text">
                        <h1 className="title">
                           Vielfalt des Zusammenlebens - kulturelle Integration
                        </h1>
                        <p>einleitung</p>
                        <p>Verhältnis von Religion und Staat</p>
                        <p>mehr erfahren...</p>
                     </div>
                  </article>
               </Link>
            </main>
         </div>
      </div>
   );
};

export default Showcase;
