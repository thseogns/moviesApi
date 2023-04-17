/** @format */

import React, { useState } from "react";
import styles from "./TimeComponent.module.css";
const TimeComponent = () => {
  const [time, setTime] = useState("");
  const [todayDate, setTodayDate] = useState("");
  const [hourOfTime, setHourOfTime] = useState("");

  setInterval(() => {
    clock();
  }, 1000);

  function clock() {
    let today = new Date();

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes(); // 분

    //시간
    if (month < 10 && month.toString().length < 3) {
      month = "0" + month;
    }
    if (minutes < 10 && minutes.toString().length < 3) {
      minutes = "0" + minutes;
    }
    if (date < 10 && date.toString().length < 3) {
      date = "0" + date;
    }

    if (hours === 0) {
      hours = 12;
    }
    setHourOfTime(hours);

    // if (hours > 11) {
    //   document.getElementById("mf").innerHTML = "오후";
    // } else {
    //   document.getElementById("mf").innerHTML = "오전";
    // }

    setTime(hours + ":" + minutes);
    setTodayDate(year + "-" + month + "-" + date);
  }
  return (
    <div className={styles.todayCover}>
      <div className={styles.timeCover}>
        {hourOfTime > 11 ? <span>오후</span> : <span>오전</span>}
        {time}
      </div>
      <div className={styles.dateCover}>{todayDate}</div>
    </div>
  );
};

export default TimeComponent;
