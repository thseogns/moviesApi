/** @format */

import React from "react";
import styles from "./Mbti.module.css";
const Mbti = () => {
  return (
    <div className={styles.mbti}>
      <h1>MBTI :: ISFP</h1>
      <div className={styles.imgCover}>
        <img
          src={`${process.env.PUBLIC_URL}/img/myinfo/kisspng-isfp-personalisfp.png`}
          alt="ISFP"
        />
      </div>{" "}
    </div>
  );
};

export default Mbti;
