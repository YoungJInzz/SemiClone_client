import React from "react";
import TimeItem from "./timeItem";

const ScreenItem = ({
  timeData,
  selectScreen,
  item,
  selectScreenName,
  setTotalSeat,
}) => {
  return (
    <div className="timeItem">
      <span className="dimension">{item.screen.dimension}</span>
      <span className="screen">{item.screen.name}</span>
      <span className="totalSeat">(총{item.screen.totalSeat}석)</span>
      <br />
      <div seatSlot-section>
        {item.timeTables.map((entry) => (
          <TimeItem
            name={item.screen.name}
            totalSeat={item.screen.totalSeat}
            timeData={timeData}
            selectScreen={selectScreen}
            selectScreenName={selectScreenName}
            entry={entry}
            setTotalSeat={setTotalSeat}
          />
        ))}
      </div>
    </div>
  );
};

export default ScreenItem;
