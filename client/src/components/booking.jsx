import React, { useEffect } from "react";
import Dates from "./date";
import MovieSection from "./movieSection";
import TheatherSection from "./theatherSection";
import TimeSection from "./timeSection";
import BookInfo from "./bookInfo";
import SeatSelectSection from "./seatSelectSection";
import loadingImg from "../resources/loading.gif";

const Booking = ({
  screenName,
  group,
  movie,
  theater,
  timeData,
  region,
  regiontheater,
  movielist,
  theaterlist,
  date,
  currentStep,
  person,
  screeninfo,
  selectMovie,
  selectRegion,
  selectTheater,
  selectDate,
  selectScreen,
  moveToBefore,
  moveToNext,
  selectAdult,
  selectTeen,
  selectSenior,
  seatArr,
  userId,
  seatSelected,
  seatSelectedIndex,
  handleseatSelected,
  handleseatSelectedIndex,
  handleSeatArr,
  movies,
  cinemas,
  dates,
  getScreens,
  getInitScreens,
  InitState,
  getSCreensState,
  showTimes,
  initShowTimes,
  initTotal,
  selectScreenName,
  setTotalSeat,
  totalSeat,
  getSeatTable,
  seatTable,
}) => {
  // useEffect(() => {
  //   console.log(dates);
  // });
  return (
    <div
      className={
        InitState == true || getSCreensState === true ? "notClick" : ""
      }
    >
      <div className="booking-container">
        <img
          className={
            "loading" +
            (InitState === false && getSCreensState === false ? " hide" : "")
          }
          src={loadingImg}
        />
        <div className={"step1" + (currentStep !== 1 ? " hide" : "")}>
          <MovieSection
            selectTheater={selectTheater}
            initShowTimes={initShowTimes}
            movies={movies}
            movie={movie}
            movielist={movielist}
            selectMovie={selectMovie}
            selectScreen={selectScreen}
            getScreens={getScreens}
            group={group}
            theater={theater}
            date={date}
            getInitScreens={getInitScreens}
            selectDate={selectDate}
            selectRegion={selectRegion}
            initTotal={initTotal}
          />
          <TheatherSection
            getInitScreens={getInitScreens}
            selectMovie={selectMovie}
            movie={movie}
            date={date}
            region={region}
            selectRegion={selectRegion}
            theater={theater}
            theaterlist={theaterlist}
            regiontheater={regiontheater}
            selectTheater={selectTheater}
            selectScreen={selectScreen}
            cinemas={cinemas}
            getScreens={getScreens}
            group={group}
            initShowTimes={initShowTimes}
            selectDate={selectDate}
            selectRegion={selectRegion}
            initTotal={initTotal}
          />
          <Dates
            selectMovie={selectMovie}
            dates={dates}
            date={date}
            selectDate={selectDate}
            selectScreen={selectScreen}
            getScreens={getScreens}
            movie={movie}
            theater={theater}
            group={group}
            getInitScreens={getInitScreens}
            initShowTimes={initShowTimes}
            selectTheater={selectTheater}
            selectRegion={selectRegion}
            initTotal={initTotal}
          />
          <TimeSection
            timeData={timeData}
            selectScreen={selectScreen}
            screeninfo={screeninfo}
            showTimes={showTimes}
            selectScreenName={selectScreenName}
            setTotalSeat={setTotalSeat}
          />
        </div>
        <div className={"step2" + (currentStep !== 2 ? " hide" : "")}>
          <SeatSelectSection
            screenName={screenName}
            theater={theater}
            timeData={timeData}
            date={date}
            person={person}
            screeninfo={screeninfo}
            selectAdult={selectAdult}
            selectTeen={selectTeen}
            selectSenior={selectSenior}
            seatArr={seatArr}
            userId={userId}
            seatSelected={seatSelected}
            seatSelectedIndex={seatSelectedIndex}
            handleseatSelected={handleseatSelected}
            handleseatSelectedIndex={handleseatSelectedIndex}
            handleSeatArr={handleSeatArr}
            totalSeat={totalSeat}
            seatTable={seatTable}
          />
        </div>
      </div>
      <BookInfo
        screenName={screenName}
        handleseatSelectedIndex={handleseatSelectedIndex}
        seatSelectedIndex={seatSelectedIndex}
        handleSeatArr={handleSeatArr}
        selectAdult={selectAdult}
        selectTeen={selectTeen}
        selectSenior={selectSenior}
        handleseatSelected={handleseatSelected}
        person={person}
        seatSelected={seatSelected}
        movie={movie}
        theater={theater}
        timeData={timeData}
        date={date}
        screeninfo={screeninfo}
        moveToBefore={moveToBefore}
        moveToNext={moveToNext}
        currentStep={currentStep}
        getSeatTable={getSeatTable}
      />
      <div className="test"></div>
    </div>
  );
};

export default Booking;
