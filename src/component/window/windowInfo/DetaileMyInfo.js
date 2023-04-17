/** @format */

import React from "react";
import { CgNametag } from "react-icons/cg";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FcCallback } from "react-icons/fc";
import { FaRegAddressBook, FaStickyNote } from "react-icons/fa";

import styles from "./DetaileMyInfo.module.css";
const DetaileMyInfo = () => {
  return (
    <div className={styles.infoBoxCover}>
      <div className={styles.infoTitle}>
        <CgNametag />
        <h1>My Info</h1>
      </div>

      <div className={styles.infoBox}>
        <div className={styles.profileCover}>
          <div className={styles.circle}>
            <img
              src={`${process.env.PUBLIC_URL}/img/myinfo/picture.jpg`}
              alt="Profile"
            />
          </div>
        </div>
        <div className={styles.D_infoBox}>
          <strong>
            <MdDriveFileRenameOutline />
            <span>이름 : 손대훈</span>
          </strong>
          <strong>
            <FaBirthdayCake />
            <span>생년월일 : 1995년 1월 2일</span>
          </strong>
          <strong>
            <AiOutlineMail />
            <span>이메일 : thseo1758@naver.com</span>
          </strong>
          <strong>
            <FcCallback />
            <span>연락처 : 010-7599-1758</span>
          </strong>
          <strong>
            <FaRegAddressBook />
            <span>주소 : 서울특별시 신림동</span>
          </strong>
          <strong>
            <FaStickyNote />
            <span>자기소개서 :</span>
            <a
              href={`${process.env.PUBLIC_URL}/personal/손대훈 입사지원서.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              바로가기
            </a>
          </strong>
          <strong>
            <a
              href="https://github.com/thseogns"
              target="_blank"
              rel="noreferrer"
            >
              github 바로가기
            </a>
          </strong>
        </div>
      </div>
    </div>
  );
};

export default DetaileMyInfo;
