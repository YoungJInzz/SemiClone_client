import React from "react";
import { FaArrowRight } from "react-icons/fa";

const RightBtn1 = ({
  movie,
  theater,
  date,
  timeData,
  title,
  moveToNext,
  currentStep,
  step,
  getSeatTable,
}) => {
  return (
    <div className="right-btn">
      <div
        className={
          "rightBtn" +
          (movie !== "" && theater !== "" && date !== "" && timeData !== ""
            ? " red"
            : " gray") +
          (currentStep !== step ? " hide" : "")
        }
        onClick={() => {
          if (movie !== "" && theater !== "" && date !== "" && timeData !== "") {
            moveToNext();
            getSeatTable(timeData.id);
          } else alert("영화,극장,날짜,시간선택을 완료해주세요");
        }}
      >
        <FaArrowRight className="rightArrow" />
        <div className="rightBtn-title">{title}</div>
      </div>
    </div>
  );
};

export default RightBtn1;
