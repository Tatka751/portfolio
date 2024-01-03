import React from "react";
import ProjectItem from "../components/ProjectItem";
import Proj1 from "../assets/Authorization-Registration_form.jpg";
import Proj2 from "../assets/Simple_Phonebook.jpg";
import Proj3 from "../assets/Publications.jpg";
import Proj4 from "../assets/Star_Wars_About.jpg";
import Proj5 from "../assets/Timer-Alarm_clock.jpg";

import "../styles/Projects.css";
import "../components/i18n/i18n.js";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <div className="projects">
      <h1>{t("ProjH1")}</h1>
      <div className="projectList"></div>
      <ProjectItem
        name={t("proj1Name")}
        image={Proj1}
        link={"https://tatka751.github.io/HW20/"}
      />
      <ProjectItem
        name={t("proj2Name")}
        image={Proj2}
        link={"https://tatka751.github.io/HW17/"}
      />
      <ProjectItem
        name={t("proj3Name")}
        image={Proj3}
        link={"https://tatka751.github.io/HW21/"}
      />
      <ProjectItem
        name={t("proj4Name")}
        image={Proj4}
        link={"https://tatka751.github.io/CURS/HW12/"}
      />
      <ProjectItem
        name={t("proj5Name")}
        image={Proj5}
        link={"https://tatka751.github.io/HW11/"}
      />
    </div>
  );
}

export default Projects;
