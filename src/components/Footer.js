import React from "react";
import { Email, Phone, GitHub } from "@material-ui/icons";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GitHub/>
        <Phone/>
        <Email/>
      </div>
      <p>&copy; 2023</p>
    </div>
  );
}

export default Footer;
