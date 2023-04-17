/** @format */

import React from "react";
import styles from "./Subproject.module.css";
const SubProject = () => {
  const subProjects = [
    {
      name: "빙그레",
      title: "Binggrae",
      href: "https://thseogns.github.io/pf1/",
    },
    {
      name: "weather",
      title: "Weather",
      href: "https://thseogns.github.io/Weather/",
    },
    {
      name: "Todo",
      title: "TodoList",
      href: "https://thseognstodo.netlify.app/",
    },
    {
      name: "img",
      title: "ImageSort",
      href: "https://thseogns.github.io/imgsiteSkyBlue/",
    },
  ];

  return (
    <ul className={styles.subCover}>
      {subProjects.map((subProject) => (
        <li key={subProject.nmae} className={styles.subProjectBox}>
          <h3>{subProject.title}</h3>
          <a href={subProject.href} target="_blank" rel="noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/img/project/${subProject.name}.png`}
              alt={subProject.title}
              className={styles.subProject}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SubProject;
