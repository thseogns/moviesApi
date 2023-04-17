/** @format */

import React from "react";
import styles from "./MyInfo.module.css";
import DetaileMyInfo from "./DetaileMyInfo";
import Mbti from "./Mbti";

const MyInfo = () => {
  return (
    <div className={styles.infoCover}>
      <DetaileMyInfo />
      <Mbti />
    </div>
  );
};

export default MyInfo;
