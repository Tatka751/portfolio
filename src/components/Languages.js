import React from "react";
import '../styles/Languages.css';
import '../components/i18n/i18n.js';
import i18next from "i18next";


function Languages() {
  return (
    <div className="languages">
      
      <button className="buttonLang" onClick={() => {i18next.changeLanguage("uk")}}>Українською</button>
      <button className="buttonLang" onClick={() => {i18next.changeLanguage("en")}}>in English</button> 
    </div>
  );
}

export default Languages;
