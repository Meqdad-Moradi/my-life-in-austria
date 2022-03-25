import React from "react";

const Notice = () => {
   return (
      <section className="notice">
         <div className="container">
            <div className="notice-content">
               <h1 className="title">Hinweis</h1>
               <p>
                  Die Inhalt der vorliegenden Lernunterlage sind sprachlich
                  bewust eifach gehalten. Dadurch soll sie auch für Flüchtlinge
                  mit geringen Deutschkentnissen verwendbar sein. Spezifisch
                  Details können folglich weniger differenziert abgebildet
                  werden.
               </p>
               <p>
                  Die Lernunterlage basiert auf der Broschüre "Zusammenleben in
                  Österreich Werte, die uns verbinden" des Bundesministeriums
                  für Europa, Integration und Äußeres, in der unsere Grundwerte
                  erstmals vertieft im Kontext Integration behandelt wurden.
               </p>
            </div>
         </div>
      </section>
   );
};

export default Notice;
