/** @format */

import React from "react";
import styles from "./WindowHeader.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { FaRegWindowMaximize, FaRegWindowMinimize } from "react-icons/fa";
import { useValue, useValueDispatch } from "../../reducer/ValuePro";
const WindowHeader = () => {
  const value = useValue().name;
  const disfatch = useValueDispatch();
  console.log(value);
  const handleClick = () => {
    disfatch({ type: value, toggle: false });
  };
  return (
    <div className={styles.headerCover}>
      <div className={styles.header}>
        <div className={styles.value}>{value}</div>
        <div>
          <button>
            <FaRegWindowMinimize />
          </button>
          <button>
            <FaRegWindowMaximize />
          </button>
          <button onClick={handleClick}>
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WindowHeader;
