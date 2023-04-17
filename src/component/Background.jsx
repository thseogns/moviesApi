/** @format */

import React from "react";
import styles from "./Background.module.css";
import StartBar from "./start/StartBar";
import FileComponent from "./file/FileComponent";
import Window from "./window/Window";
import { useValue } from "../reducer/ValuePro";

const Background = () => {
  let value = useValue().toggle;
  const number = useValue().number;
  console.log("보낸 후 의값", number);
  return (
    <div className={styles.main_back}>
      {number === 0 && (
        <img
          src={`${process.env.PUBLIC_URL}/img/background/wid.jpg`}
          alt="Background"
        />
      )}
      {number === 1 && (
        <img
          src={`${process.env.PUBLIC_URL}/img/background/win2.jpg`}
          alt="Background"
        />
      )}
      {number === 2 && (
        <img
          src={`${process.env.PUBLIC_URL}/img/background/win3.jpg`}
          alt="Background"
        />
      )}{" "}
      <FileComponent />
      {value && <Window />}
      <StartBar />
    </div>
  );
};

export default Background;
