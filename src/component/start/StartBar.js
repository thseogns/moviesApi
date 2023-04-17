/** @format */

import React from "react";
import styles from "./StartBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FcCursor } from "react-icons/fc";
import TimeComponent from "./TimeComponent";
import { useValueDispatch } from "../../reducer/ValuePro";

const StartBar = () => {
  const disfatch = useValueDispatch();
  const handleChangeBackground = () => {
    let number = Math.random();
    number = number * 3;
    number = Math.floor(number);
    disfatch({
      type: "PUSH BUTTON",
      number: number,
    });
  };
  return (
    <div className={styles.startBar}>
      <div className={styles.startMenuCover}>
        <div className={styles.buttonCover}>
          <button
            className={styles.startbutton}
            onClick={handleChangeBackground}
          >
            <img
              src={`${process.env.PUBLIC_URL}/img/windows-icon.png`}
              alt="시작버튼"
            />
          </button>
          <div className={styles.clickCover}>
            <div className={styles.curser}>
              <FcCursor />
            </div>
            <span> Click</span>
          </div>
        </div>
        <div className={styles.search}>
          <AiOutlineSearch />
        </div>
      </div>

      <TimeComponent />
    </div>
  );
};

export default StartBar;
