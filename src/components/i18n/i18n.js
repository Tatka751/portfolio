import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      about: "Hi, my name is Tetiana",
      aboutP: "A software developer with a passion for learning and creating",
      item1: "Front-End",
      sp1: "HTML and CSS, React, Redux, JavaScript, Git, Node.js",
      item2: "Other skills",
      sp2: "SQL,Quality Assurance",
      item3: "Languages",
      sp3: "Ukrainian,English,Spanish with dictionary",
      ProjH1:"My Personal Projects",
      proj1Name: "Authorization/Registration form",
      proj2Name: "Simple Phonebook",
      proj3Name: "Publications",
      proj4Name: "Star Wars About",
      proj5Name: "Timer-Alarm clock",
      navHome: "Main",
      navProjects: "Projects",
      navExperience: "Experience",
      h32023: 'IT school "Cursor"',
      p2023:"Front-End advanced",
      h32015Pr: '"Cherkasyoblenergo"',
      p2015Pr:"Management of financial and technical processes, Enterprise accounting, Software engineer",
      h32014: '"QATestLab" training center',
      p2014:"Quality Assurance",
      h32007_2015: 'Cherkasy branch of "Ukrtelecom"',
      p2007_2015:"Accounting management sector, Software engineer",
      h32002_2007: 'Cherkasy State Technological University',
      p2002_2007:"Computer engineering, Computer technologies"
      
    },
  },
  uk: {
    translation: {
      about: "Привіт, я Тетяна",
      aboutP: "Розробник програмного забезпечення з натхненням до розвитку і творчості ",
      item1: "Розробка веб-інтерфейсів",
      sp1: "HTML, CSS, React, Redux, JavaScript, Git, Node.js",
      item2: "Інші навички",
      sp2: "SQL,Quality Assurance",
      item3: "Володіння мовами",
      sp3: "українська, англійська, іспанська зі словником",
      ProjH1:"Мої власні проєкти",
      proj1Name: "Форма авторизації/реєстрації",
      proj2Name: "Простий телефонний довідник",
      proj3Name: "Публікації",
      proj4Name: "Про зоряні війни",
      proj5Name: "Таймер-будильник",
      navHome: "Головна",
      navProjects: "Проєкти",
      navExperience: "Досвід",
      h32023: 'IT школа "Курсор"',
      p2023:"Front-End поглиблений",
      h32015Pr: '"Черкасиобленерго"',
      p2015Pr:"Управління фінансово-технічними процесами, Бухгалтерія підприємства, Інженер-програміст",
      h32014: 'Навчальний центр "QATestLab"',
      p2014:"Тестування",
      h32007_2015: 'Черкаська філія "Укртелеком"',
      p2007_2015:"Сектор управління бухгалтерським обліком, Інженер-програміст",
      h32002_2007: 'Черкаський державний технологічний університет',
      p2002_2007:"Комп'ютерна інженерія, Комп'ютерні технології"


    },
  },
};

i18n.use(initReactI18next).use(LanguageDetector).init({
  resources,
  fallback: "en",
});

export default i18n;
