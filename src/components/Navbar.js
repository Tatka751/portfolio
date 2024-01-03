import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import useState from "use-react-state";
import '../components/i18n/i18n.js';
import { useTranslation } from "react-i18next";



function Navbar() {
  const [expandNavbar, setExpanpNavbar] = useState(false);

  const Location = useLocation();

  const { t } = useTranslation();


  useEffect(() => {
    setExpanpNavbar(false)
  }, [Location])
  
  return (
    <div className="navbar" id = {expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpanpNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">{t("navHome")}</Link>
        <Link to="/projects">{t("navProjects")}</Link>
        <Link to="/experience">{t("navExperience")}</Link>
      </div>
    </div>
  );
}

export default Navbar;
