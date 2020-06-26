import React, { useState, useEffect } from "react";

const DateItem = ({
  getInitScreens,
  item,
  date,
  numToDay,
  handleDate,
  getScreens,
  movie,
  theater,
  group,
  selectDate,
  initTotal,
}) => {
  const clickDate = (item) => {
    if (item.isVailable === true) {
      selectDate(item.date);
      getScreens({
        movieId: movie.id,
        cinemaId: theater.id,
        date: item.date,
        group,
      });
    } else {
      if (
        window.confirm(
          "해당 상영스케줄이 없습니다.다시 선택하시겠습니까?(선택한 극장 및 날짜가 초기화됩니다)"
        )
      ) {
        initTotal();
        getInitScreens();
      }
    }
  };

  return (
    <div
      className={
        "dateItem" +
        (item.date === date ? " selected" : "") +
        (item.isVailable === false ? " blur2" : "")
      }
      onClick={() => clickDate(item)}
    >
      <span
        className={
          "day " + (item.day === 0 ? "sun" : item.day === 6 ? "sat" : "")
        }
      >
        {numToDay(item.day)}
      </span>
      <span className="date">{handleDate(item)}</span>
    </div>
  );
};
//////////////////////////////////////////////////////////////////
const Dates = ({
  date,
  selectScreen,
  dates,
  getScreens,
  getInitScreens,
  movie,
  theater,
  group,
  selectMovie,
  initShowTimes,
  selectTheater,
  selectDate,
  selectRegion,
  initTotal,
}) => {
  const [year, setYear] = useState();
  const [thisMonth, setThisMonth] = useState();
  const [nextMonth, setNextMonth] = useState();
  const [beforeDates, setBeforeDates] = useState([]);
  const [thisDates, setThisDates] = useState([]);
  const [nextDates, setNextDates] = useState([]);

  const numToDay = (num) => {
    var weekday = new Array(7);
    weekday[0] = "일";
    weekday[1] = "월";
    weekday[2] = "화";
    weekday[3] = "수";
    weekday[4] = "목";
    weekday[5] = "금";
    weekday[6] = "토";
    return weekday[num];
  };

  const getDateArr = () => {
    let beforeDatesArr = [];
    let thisDatesArr = [];
    let nextDatesArr = [];
    for (let item of dates) {
      if (Number(JSON.stringify(item.date).substring(4, 6)) === thisMonth - 1) {
        beforeDatesArr.push(item);
      }
      if (Number(JSON.stringify(item.date).substring(4, 6)) === thisMonth) {
        thisDatesArr.push(item);
      }
      if (Number(JSON.stringify(item.date).substring(4, 6)) === thisMonth + 1) {
        nextDatesArr.push(item);
      }
    }
    setBeforeDates(beforeDatesArr);
    setThisDates(thisDatesArr);
    setNextDates(nextDatesArr);
  };

  const handleDate = (item) => {
    let string = JSON.stringify(item.date);
    return string.substring(6, 8);
  };
  const handleDay = (item) => {
    let datInfo = new Date(
      Number(item.subString(0, 4)),
      Number(item.subString(4, 6)),
      Number(item.subString(6, 8))
    );
    return numToDay(datInfo.getDay());
  };
  useEffect(() => {
    setYear(new Date().getFullYear());
    setThisMonth(new Date().getMonth() + 1);
    if (thisMonth === 12) {
      setNextMonth(1);
    } else {
      setNextMonth(new Date().getMonth() + 2);
    }
    getDateArr();
  }, [dates, date]);

  return (
    <>
      <div className="date-section">
        <div className="head">날짜</div>
        <div className="year">{year}</div>
        <div className={"month" + (beforeDates.length === 0 ? "hide" : "")}>
          {thisMonth - 1}
        </div>
        <div className={"dates" + (beforeDates.length === 0 ? "hide" : "")}>
          {beforeDates.map((item) => (
            <DateItem
              getInitScreens={getInitScreens}
              item={item}
              date={date}
              numToDay={numToDay}
              handleDate={handleDate}
              getScreens={getScreens}
              movie={movie}
              theater={theater}
              group={group}
              selectDate={selectDate}
              initTotal={initTotal}
            />
          ))}
        </div>
        <div className="month">{thisMonth}</div>
        <div className="dates">
          {thisDates.map((item) => (
            <DateItem
              getInitScreens={getInitScreens}
              item={item}
              date={date}
              numToDay={numToDay}
              handleDate={handleDate}
              getScreens={getScreens}
              movie={movie}
              theater={theater}
              group={group}
              selectDate={selectDate}
              initTotal={initTotal}
            />
          ))}
        </div>
        <div className={"month" + (nextDates.length === 0 ? " hide" : "")}>
          {thisMonth + 1}
        </div>
        <div className={"dates" + (nextDates.length === 0 ? " hide" : "")}>
          {nextDates.map((item) => (
            <DateItem
              getInitScreens={getInitScreens}
              item={item}
              date={date}
              numToDay={numToDay}
              handleDate={handleDate}
              getScreens={getScreens}
              movie={movie}
              theater={theater}
              group={group}
              selectDate={selectDate}
              initTotal={initTotal}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dates;
