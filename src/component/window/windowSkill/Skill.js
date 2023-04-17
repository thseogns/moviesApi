/** @format */

import React, { useState, useEffect } from "react";
import styles from "./Skill.module.css";

const Skill = (props) => {
  const [hover, setHover] = useState("");
  const [percent, setPercent] = useState(0); //출력용

  const [mouseState, setMouseState] = useState(false);
  const [count, setCount] = useState(0);

  const skills = props.skills;
  useEffect(() => {
    if (mouseState === true) {
      if (count <= percent) {
        const intervalId = setInterval(() => {
          setCount((c) => c + 1);
        }, 10);

        return () => clearInterval(intervalId);
      }
    } else {
      if (count > 0) {
        setCount(0);
      }
    }
  }, [mouseState, count, percent]);
  console.log(hover);
  console.log(typeof Number(count));
  return (
    <ul className={styles.skills}>
      {skills.map((skill) => (
        <li
          key={skill.name}
          onMouseEnter={() => {
            setHover(skill.alt);
            setPercent(skill.percent);
            setMouseState(true);
          }}
          onMouseLeave={() => {
            setHover(false);
            setMouseState(false);
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/img/Skills/${skill.img}`}
            alt={skill.alt}
          />
          <div className={styles.gageWrapper}>
            <div
              className={skill.alt === hover ? styles.gage : null}
              style={
                skill.alt === hover
                  ? { transitionDuration: "1s", width: `${percent}%` }
                  : null
              }
            ></div>
            <span>{skill.alt === hover ? count : "0"} %</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Skill;
