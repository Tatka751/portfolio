import React from "react";
import GitHub from "@material-ui/icons/GitHub";
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";
import "../styles/Home.css";
import "../components/i18n/i18n.js";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <div className="home">
      <div className="about">
        <h2>{t("about")}</h2>
        <div className="prompt">
          <p>{t("aboutP")}</p>
          <GitHub />
          <Phone />
          <Email />
        </div>
      </div>
      <div className="skills">
        <ul className="list">
          <li className="item">
            <h2>{t("item1")}</h2>
            <span>{t("sp1")}</span>
          </li>
          <li className="item">
            <h2>{t("item2")}</h2>
            <span>{t("sp2")}</span>
          </li>
          <li className="item">
            <h2>{t("item3")}</h2>
            <span>{t("sp3")}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
