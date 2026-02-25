import { useState } from "react";
import { ProjectsContainer } from "./ProjectsContainer.jsx";

export const Content = () => {
  const [lang, setLang] = useState("es");

  const content = {
    en: {
      title: "Data Visualization Projects",
      description:
        "This collection showcases interactive data visualization projects developed as part of the freeCodeCamp Data Visualization Certification. Each project demonstrates the use of D3.js to transform raw datasets into meaningful and interactive visual representations.",
      projectsTitle: "Projects"
    },
    es: {
      title: "Proyectos de Visualización de Datos",
      description:
        "Esta colección presenta proyectos interactivos desarrollados como parte de la certificación de Visualización de Datos de freeCodeCamp. Cada proyecto demuestra el uso de D3.js para transformar conjuntos de datos en representaciones visuales claras e interactivas.",
      projectsTitle: "Proyectos"
    }
  };

  const localized = content[lang] ?? content.en;

  return (
    <section className="content">
      <header className="content-header">

        <div className="lang-toggle">
          <button
            type="button"
            className={lang === "es" ? "is-active" : ""}
            onClick={() => setLang("es")}
          >
            ES
          </button>
          <button
            type="button"
            className={lang === "en" ? "is-active" : ""}
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>
      <aside className="my-name">Franco Guze</aside>

        <h1>{localized.title}</h1>
        <p>{localized.description}</p>
      </header>

      <div className="projects-block">
        <div className="projects-heading">
          <h2>{localized.projectsTitle}</h2>
        </div>
        <ProjectsContainer lang={lang} />
      </div>
    </section>
  );
};
