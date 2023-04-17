/** @format */

import React, { useState } from "react";
import styles from "./File.module.css";
import { useValueDispatch } from "../../reducer/ValuePro";
const File = () => {
  const [count, setCount] = useState(1);
  const fileName = [
    { id: 1, name: "바탕화면", img: "mypc" },
    { id: 2, name: "내정보", img: "net" },
    { id: 3, name: "기술", img: "pngegg" },
    { id: 4, name: "프로젝트", img: "folder" },
    { id: 5, name: "서브프로젝트", img: "trash" },
  ];
  const dispatch = useValueDispatch();

  const handleClick = (e) => {
    const patchName = e.target.parentElement.lastChild.innerText;

    dispatch({ type: patchName, toggle: true });
    if (patchName === "바탕화면") {
      setCount((c) => c + 1);
    }
    console.log(count);
  };
  return (
    <ul className={styles.folderCover}>
      {fileName.map((name) => (
        <li key={name.id} className={styles.folder} onClick={handleClick}>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/img/folderImg/${name.img}.png`}
              alt="이미지"
            ></img>
            <div>{name.name}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default File;
