import React from "react";
import ScreenItem from "./screenItem";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

const TimeSection = ({
  timeData,
  selectScreen,
  screeninfo,
  showTimes,
  selectScreenName,
  setTotalSeat,
  movie,
  theater,
  date,
}) => {
  return (
    <div className="time-section">
      <div className="head">시간</div>
      <div className="time-option">
        <span className="morning">
          <FiSun className="sun" />
          조조
        </span>
        <span className="night">
          <FiMoon className="moon" />
          심야
        </span>
      </div>
      <div className="timeInfo">
        <div
          className={
            "placeholder" +
            (movie !== "" && theater !== "" && date !== "" ? " hide" : "")
          }
        >
          영화,극장,날짜를 선택해주세요
        </div>
        {showTimes.map((item) => (
          <ScreenItem
            timeData={timeData}
            selectScreen={selectScreen}
            item={item}
            selectScreenName={selectScreenName}
            setTotalSeat={setTotalSeat}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeSection;
