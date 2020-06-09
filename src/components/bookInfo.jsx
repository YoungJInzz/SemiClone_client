import React, { useState, useEffect } from "react";
import RightBtn1 from "./rightBtn1";
import RightBtn2 from "./rightBtn2";
import RightBtn3 from "./rightBtn3";
import LeftBtn1 from "./leftBtn";
import LeftBtn2 from "./leftBtn2";
const BookInfo = ({
  selectedSeats,
  setBookedToEmpty,
  changeTicketState,
  ticketTokens,
  screenName,
  movie,
  theater,
  timeData,
  date,
  moveToBefore,
  moveToNext,
  currentStep,
  seatSelected,
  person,
  selectAdult,
  selectTeen,
  selectSenior,
  handleseatSelected,
  handleseatSelectedIndex,
  seatSelectedIndex,
  handleSeatArr,
  getSeatTable,
}) => {
  const [time, setTime] = useState("");
  const [dateStr, setDateStr] = useState("");
  useEffect(() => {
    setDateStr(JSON.stringify(date));
  }, [timeData, date]);

  return (
    <div className="bookInfoContainer">
      <LeftBtn1
        setBookedToEmpty={setBookedToEmpty}
        selectedSeats={selectedSeats}
        moveToBefore={moveToBefore}
        currentStep={currentStep}
        selectAdult={selectAdult}
        selectSenior={selectSenior}
        selectTeen={selectTeen}
        handleseatSelected={handleseatSelected}
        handleseatSelectedIndex={handleseatSelectedIndex}
        seatSelectedIndex={seatSelectedIndex}
        handleSeatArr={handleSeatArr}
        ticketTokens={ticketTokens}
        changeTicketState={changeTicketState}
      />
      <LeftBtn2
        moveToBefore={moveToBefore}
        currentStep={currentStep}
      ></LeftBtn2>
      <div className="bookInfo">
        <div className="mv Choice">
          <div className={"choicePh" + (movie !== "" ? " hide" : "")}>
            영화선택
          </div>
          <div className="movieSelected">{movie.movieTitle}</div>
        </div>
        <div className="th Choice">
          <div
            className={
              "choicePh" + (theater !== "" || date !== "" ? " hide" : "")
            }
          >
            극장선택
          </div>
          <div
            className={
              "theaterInfo" + (theater === "" && date === "" ? " hide" : "")
            }
          >
            <div className="row">
              <span className="content-title">극장</span>
              <span className={"content" + (theater === "" ? " hide" : "")}>
                {" "}
                {`CGV ${theater.cinemaName}`}
              </span>
            </div>
            <div className="row">
              <span className="content-title">일시</span>
              <span className={"content" + (date === "" ? " hide" : "")}>
                {`${dateStr.substring(0, 4)}/${dateStr.substring(
                  4,
                  6
                )}/${dateStr.substring(6, 8)}`}
              </span>
              <span className="content-time">{time}</span>
            </div>
            <div className="row">
              <span className="content-title">상영관</span>
              <span className={"content" + (screenName === "" ? " hide" : "")}>
                {screenName}
              </span>
            </div>
            <div className="row">
              <span className="content-title">인원</span>
            </div>
          </div>
        </div>
        <div className="se Choice">
          <div
            className={"choicePh" + (seatSelected.length !== 0 ? " hide" : "")}
          >
            좌석선택
          </div>
          <div className={"row" + (seatSelected.length === 0 ? " hide" : "")}>
            <span className="content-seat">좌석번호</span>
            <div className="seatSelectedContainer">
              {seatSelected.map((item) => (
                <div className="eachSeat">
                  <span>{item},</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pay Choice">
          <div
            className={
              "choicePh" +
              (person.adult + person.teen + person.senior !== 0 ? " hide" : "")
            }
          >
            결제
          </div>
          <div className={"row" + (person.adult === 0 ? " hide" : "")}>
            <span className="content-seat">일반</span>
            <span className="price">{person.adult * 1000} 원</span>
          </div>
          <div className={"row" + (person.teen === 0 ? " hide" : "")}>
            <span className="content-seat">청소년</span>
            <span className="price">{person.teen * 1000} 원</span>
          </div>
          <div className={"row" + (person.senior === 0 ? " hide" : "")}>
            <span className="content-seat">우대</span>
            <span className="price">{person.senior * 1000} 원</span>
          </div>
          <div
            className={
              "row" +
              (person.adult + person.teen + person.senior === 0 ? " hide" : "")
            }
          >
            <span className="content-seat">총금액</span>
            <span className="price red-font">
              {(person.adult + person.teen + person.senior) * 1000} 원
            </span>
          </div>
        </div>

        <RightBtn1
          getSeatTable={getSeatTable}
          movie={movie}
          theater={theater}
          date={date}
          timeData={timeData}
          title="좌석선택"
          moveToNext={moveToNext}
          currentStep={currentStep}
          step={1}
        />
        <RightBtn2
          person={person}
          seatSelected={seatSelected}
          title="결제선택"
          moveToNext={moveToNext}
          currentStep={currentStep}
          step={2}
        />
        <RightBtn3 currentStep={currentStep} step={3} title="결제하기" />
      </div>
    </div>
  );
};

export default BookInfo;
