/** @format */

import React from "react";
import styles from "./Window.module.css";
import WindowHeader from "./WindowHeader";
import MyInfo from "./windowInfo/MyInfo";
import { useValue } from "../../reducer/ValuePro";
import WindowSkill from "./windowSkill/WindowSkill";
import MainProject from "./windowProject/MainProject";
import SubProject from "./subProject/SubProject";
const Window = () => {
  const value = useValue().name;
  console.log(value);
  return (
    <div className={styles.window}>
      <WindowHeader />
      {value === "내정보" && <MyInfo />}
      {value === "기술" && <WindowSkill />}
      {value === "프로젝트" && <MainProject />}
      {value === "서브프로젝트" && <SubProject />}
    </div>
  );
};

export default Window;
