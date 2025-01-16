import { useState } from "react";
import languages from "../assets/languages";

function Main() {
  const [langSelected, setLangSelected] = useState(0);
  const [title, setTitle] = useState("Nessun linguaggio selezionato");
  const [desc, setDesc] = useState("");

  function tabUpdater(id) {
    const language = languages.find((language) => language.id === id);
    setLangSelected(id);
    setTitle(language.title);
    setDesc(language.description);
  }

  return (
    <main>
      <div className="container py-4">
        <div className="buttons-row">
          {languages.map((language) => (
            <div key={language.id} className={`btn mx-1 ${language.id === langSelected ? "btn-warning" : "btn-primary"}`}
              onClick={() => tabUpdater(language.id)}
            >
              {language.title}
            </div>
          ))}
          <div className="result-area">
            <div className="result-content my-3 p-4 border border-2 rounded">
              <h1>{title}</h1>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};






export default Main;