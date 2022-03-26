import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Footer from "../global/Footer";
import Header from "../global/Header";

const SpracheUndBildung = () => {
   return (
      <>
         <Header />
         <main className="sprache-bildung">
            <div className="container">
               <div className="banner">
                  <img
                     src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                     alt="girl"
                  />
                  <h1 className="title">
                     Stellenwert von Sprachen und Bildung
                  </h1>
               </div>

               <section className="sprache-bildung-content">
                  <div className="text">
                     <div className="details einleitung">
                        <ul className="details-list">
                           <li>
                              Deutsch zu lernen ist absolut notwendig, um in
                              Österreich einen Beruf zu finden um sich im Alltag
                              zurechtzufinden.
                           </li>
                           <li>
                              In Österreich gibt es gute Möglichkeiten sich zu
                              bilden, also zu lernen und Qualifikationen zu
                              erwerben. Das Bildungssystem ist für alle offen.
                              Der Staat Österreich finanziert diese Bildung zu
                              einem großen Teil.
                           </li>
                           <li>
                              Bildung ist für die Menschen in Österreich sehr
                              wichtig. Frauen erhalten in Österreich die gleiche
                              Bildung wie Männer.
                           </li>
                           <li>
                              Kinder müssen in Österreich in die Schule gehen.
                              Die Eltern kummern sich darum, dass die Kinder die
                              Schule besuchen und unterstützen sie im
                              schulischen Fortkommen.
                           </li>
                        </ul>
                     </div>

                     <div className="inhalt">
                        <h1>inhalt</h1>
                        <NavLink to="seinleitung">einleitung</NavLink>
                        <NavLink to="sprache">sprache</NavLink>
                        <NavLink to="berufsausbildung">
                           berufausbildung in Österreich: die Lehre
                        </NavLink>
                        <NavLink to="erwachsenenbildung">
                           erwachsenenbildung
                        </NavLink>
                        <NavLink to="recht-pflicht">rechte & Pflicht</NavLink>
                     </div>

                     <div className="details">
                        <Outlet />
                     </div>
                  </div>
                  <div className="img-box">
                     <img
                        src="https://images.pexels.com/photos/7540263/pexels-photo-7540263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="education"
                     />
                  </div>
               </section>
            </div>
         </main>
         <Footer />
      </>
   );
};

export default SpracheUndBildung;
