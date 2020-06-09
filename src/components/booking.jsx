import React, { useEffect } from "react";
import Dates from "./date";
import MovieSection from "./movieSection";
import TheatherSection from "./theatherSection";
import TimeSection from "./timeSection";
import BookInfo from "./bookInfo";
import SeatSelectSection from "./seatSelectSection";
import loadingImg from "../resources/loading.gif";
import Payment from "./payment";
const Booking = ({
  selectedSeats,
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
  changeTicketState,
  ticketTokens,
  pointInfo,
  setSectedSeats,
  setSeatToBooked,
  setBookedToEmpty,
  initState,
}) => {
  useEffect(() => {}, []);
  return (
    <div
      className={
        "bookingContainer " +
        (InitState === true || getSCreensState === true ? "notClick" : "")
      }
    >
      <div className="booking-container">
        <img
          className={
            "loading" +
            (InitState === false && getSCreensState === false ? " hide" : "")
          }
          src={loadingImg}
          alt="불러오는중..."
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
            movie={movie}
            theater={theater}
            date={date}
          />
        </div>
        <div className={"step2" + (currentStep !== 2 ? " hide" : "")}>
          <SeatSelectSection
            selectedSeats={selectedSeats}
            setSectedSeats={setSectedSeats}
            getSeatTable={getSeatTable}
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
            changeTicketState={changeTicketState}
            ticketTokens={ticketTokens}
            setSeatToBooked={setSeatToBooked}
            setBookedToEmpty={setBookedToEmpty}
          />
        </div>
        <div className={"step3" + (currentStep !== 3 ? " hide" : "")}>
          <Payment pointInfo={pointInfo} person={person}></Payment>
        </div>
      </div>
      <BookInfo
        setBookedToEmpty={setBookedToEmpty}
        selectedSeats={selectedSeats}
        changeTicketState={changeTicketState}
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
        ticketTokens={ticketTokens}
      />
      <div className="test"></div>
    </div>
  );
};

export default Booking;
