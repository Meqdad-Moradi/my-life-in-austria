import React from "react";
import { Link } from "react-router-dom";

const Showcase = () => {
   return (
      <div className="showcase">
         <div className="container">
            <Link to="/">
               <article className="showcase-nav">
                  <div className="icon">icon</div>
                  <div className="text">
                     <h1 className="title">
                        stellenwert von Sprachen und Bildung
                     </h1>
                     <p>einleitung</p>
                     <p>sprache</p>
                  </div>
               </article>
            </Link>

            <Link to="/">
               <article className="showcase-nav">
                  <div className="icon">icon</div>
                  <div className="text">
                     <h1 className="title">Arbeitswelt und Wirtschaft</h1>
                     <p>einleitung</p>
                     <p>Unterschiedliche Arbeitsformen</p>
                  </div>
               </article>
            </Link>

            <Link to="/">
               <article className="showcase-nav">
                  <div className="icon">icon</div>
                  <div className="text">
                     <h1 className="title">Gesungheit</h1>
                     <p>einleitung</p>
                     <p>Allgemeine Information</p>
                  </div>
               </article>
            </Link>

            <Link to="/">
               <article className="showcase-nav">
                  <div className="icon">icon</div>
                  <div className="text">
                     <h1 className="title">Wohnen und Nachbarschaft</h1>
                     <p>einleitung</p>
                     <p>Hausordnung</p>
                  </div>
               </article>
            </Link>

            <Link to="/">
               <article className="showcase-nav">
                  <div className="icon">icon</div>
                  <div className="text">
                     <h1 className="title">
                        Prinzipien des Zusammenlebens - rechtliche Integration
                     </h1>
                     <p>einleitung</p>
                     <p>Menschenwürde - durch Grund - und Menschenrechte</p>
                  </div>
               </article>
            </Link>

            <Link to="/">
               <article className="showcase-nav">
                  <div className="icon">icon</div>
                  <div className="text">
                     <h1 className="title">
                        Vielfalt des Zusammenlebens - kulturelle Integration
                     </h1>
                     <p>einleitung</p>
                     <p>Verhältnis von Religion und Staat</p>
                  </div>
               </article>
            </Link>
         </div>
      </div>
   );
};

export default Showcase;
