import React from "react";

const AboutDetails = () => {
   return (
      <section>
         <h1 className="title">Einführende Wort</h1>
         <p className="sub-title">
            Integration ist die voraussetzung, um in die Mitte der österreichen
            Geselschaft zu gelangen.
         </p>

         <img
            src="https://images.unsplash.com/photo-1597086831879-756db15e81d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXVzdHJpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
            alt="about-us"
         />

         <p>
            In Österreich sind Sie sicher und frei. Hier haben Sie viele gute
            Chancen und Möglichkeiten. Nutzen dise Möglichkeiten! Wir erwarten
            uns, dass Sie an den wirtschaftlichen, sozialen, politischen und
            kulturen Prozessen in Österreich teilnehmen. Das gehr nur dann, wenn
            Sie bilden, neue Qualifikationen erwerben und neue Dinge lernen. Sie
            müssen Ihre Qualifikationen dann in der österreichen Arbeitswelt
            einsetzen. Nur so können Sie für sich und Ihre Familie sorgen - das
            ist undbedingt notwendig.
         </p>

         <p>
            Auch in Ihrem privaten Leben sollen Sie ein Teil der österreichen
            Geselschaften werden. Sie können hier Menschen kennenlernen und neue
            sozial Kontakte aufbauen.
         </p>
         <p>
            Die Grund- und Menschenrechte sind die Basis für all diese Chancen
            und Möglichkeiten. Alle Menschen haben diese Rechte. Die Basis der
            Grund- und Menschenrechte ist die Menschenwürde.
         </p>
         <p style={{ paddingBlock: "1.5em", marginBlock: "0" }}>
            <b>
               Grund- und Menschenrechte, die in Österreich gelten, sind zum
               Beispiel:
            </b>
         </p>
         <ul className="about-list">
            <li>
               <b>Menschenwürde:</b> Jeder Mensch ist gleich vie wert.
            </li>
            <li>
               <b>Frauen und Männer</b> haben die gleichen Rechte und Pflichten.
            </li>
            <li>
               <b>Freiheit:</b> Jeder Mensch kann sein Leben frei gestalten,
               solange er nicht gegen das Gesetz verstößt.
            </li>
            <li>
               <b>Demokratie:</b> Das Recht geht vom Volk aus.
            </li>
            <li>
               <b>Rechtsstaat:</b> Behörden, die Politzei und Gerichte dürfen
               nur aufgrund der Gesetze handeln.
            </li>
            <li>
               <b>Aufteilung der Staatsmacht:</b> Die staatliche Macht ist auf
               mehrere Stellen verteilt. Diese Stellen kontrollieren sich
               gegenseitig.
            </li>
         </ul>
         <p>
            Niemand darf uns diese Rechte nehmen. Egal, ob eine Person aus
            Österreich oder einem anderen Land kommt. Egal, ob sie fliehen
            musste, ob sie aus anderen Gründen hierhergekommen oder hier geboren
            ist. Auch die Religion, die Haut, die Farbe, die Politische Meinung
            und die Sexuelle Identität von einem Menschen sind nicht
            entscheidend. Es ist egal, ob man eine Frau oder ein Mann ist, ob
            man verheirateten oder nicht verheiratet ist, ein Kind einer
            verheirateten oder nicht verheirateten Person oder ein Erwachsener
            ist oder ob man zu einer Minderheit gehört. Es ist außerdem egal, ob
            eine Person arm oder reich ist oder ob sie gesund ist.
         </p>
      </section>
   );
};

export default AboutDetails;
