import React from "react";

function ProjectItem({ image, name, link }) {
  return (
    <div className="projectItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <a href={link}>
        <h1>{name}</h1>
      </a>
    </div>
  );
}

export default ProjectItem;
