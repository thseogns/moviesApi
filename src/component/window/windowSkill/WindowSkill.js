/** @format */

import React from "react";
import Skill from "./Skill";
import styles from "./WindowSkill.module.css";
const WindowSkill = () => {
  const skills = [
    { name: "HTML", img: "html.png", alt: "HTML", percent: "86" },
    { name: "JS", img: "js.png", alt: "JS", percent: "88" },
    { name: "CSS", img: "css.png", alt: "CSS", percent: "76" },
  ];
  const subSkills = [
    { name: "REACT", img: "react.png", alt: "REACT", percent: "80" },
    { name: "SASS", img: "sass.png", alt: "SASS", percent: "53" },
    { name: "jQuery", img: "JQ.png", alt: "jQuery", percent: "77" },
    { name: "Bootstrap", img: "boot.png", alt: "Bootstrap", percent: "90" },
  ];
  return (
    <div className={styles.skillCover}>
      <Skill skills={skills} />
      <Skill skills={subSkills} />
    </div>
  );
};

export default WindowSkill;
