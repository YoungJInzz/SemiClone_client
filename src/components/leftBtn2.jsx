import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const LeftBtn2 = ({ moveToBefore, currentStep }) => {
  const handlePage = () => {
    moveToBefore();
  };
  return (
    <div
      className="leftBtn"
      onClick={() => {
        handlePage();
      }}
    >
      <FaArrowLeft className="rightArrow" />
      <div className="rightBtn-title">좌석선택</div>
    </div>
  );
};

export default LeftBtn2;
