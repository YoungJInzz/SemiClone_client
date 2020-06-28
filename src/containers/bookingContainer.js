import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  initState,
  selectMovie,
  selectRegion,
  selectTheater,
  selectDate,
  selectScreen,
  moveToNext,
  moveToBefore,
  selectAdult,
  selectTeen,
  selectSenior,
  handleseatSelected,
  handleseatSelectedIndex,
  handleSeatArr,
  getInitScreens,
  getScreens,
  initShowTimes,
  initTotal,
  selectScreenName,
  setTotalSeat,
  getSeatTable,
  changeTicketState,
  getPoint,
  pointInfo,
  setSectedSeats,
  setSeatToBooked,
  setBookedToEmpty,
} from "../modules/booking";
import Booking from "../components/booking";
import dotenv from "dotenv";
dotenv.config();

const BookingConatainer = ({
  initState,
  selectedSeats,
  pointInfo,
  ticketTokens,
  seatTable,
  selectScreenName,
  initShowTimes,
  initTotal,
  group,
  dates,
  cinemas,
  movies,
  person,
  movie,
  theater,
  timeData,
  region,
  regiontheater,
  movielist,
  theaterlist,
  date,
  currentStep,
  screeninfo,
  selectMovie,
  selectRegion,
  selectTheater,
  selectScreen,
  selectDate,
  moveToNext,
  moveToBefore,
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
  getInitScreens,
  getScreens,
  InitState,
  getSCreensState,
  showTimes,
  screenName,
  setTotalSeat,
  totalSeat,
  getSeatTable,
  changeTicketState,
  getPoint,
  setSectedSeats,
  setSeatToBooked,
  setBookedToEmpty,
}) => {
  useEffect(() => {
    console.log("env", process.env.host);
    initState();
    selectDate("");
    selectTheater("");
    getInitScreens();
    getScreens();
    getPoint({ id: "admin" });

    /* React LifeCycle (init, destroy) => Control script file 
     * React componentDidMount -> script file 추가
     * React componentWillUnmount -> script file 삭제
    */
    const script = document.createElement("script");
    
    script.src = "dragging.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
    ////////////////////////////////////////////////////////////
  }, []);

  return (
    <Booking
      selectedSeats={selectedSeats}
      group={group}
      person={person}
      movie={movie}
      theater={theater}
      timeData={timeData}
      region={region}
      regiontheater={regiontheater}
      movielist={movielist}
      theaterlist={theaterlist}
      date={date}
      currentStep={currentStep}
      screeninfo={screeninfo}
      selectMovie={selectMovie}
      selectRegion={selectRegion}
      selectDate={selectDate}
      selectTheater={selectTheater}
      selectScreen={selectScreen}
      moveToBefore={moveToBefore}
      moveToNext={moveToNext}
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
      movies={movies}
      cinemas={cinemas}
      dates={dates}
      getScreens={getScreens}
      getInitScreens={getInitScreens}
      InitState={InitState}
      getSCreensState={getSCreensState}
      showTimes={showTimes}
      initShowTimes={initShowTimes}
      initTotal={initTotal}
      selectScreenName={selectScreenName}
      screenName={screenName}
      setTotalSeat={setTotalSeat}
      totalSeat={totalSeat}
      getSeatTable={getSeatTable}
      seatTable={seatTable}
      changeTicketState={changeTicketState}
      ticketTokens={ticketTokens}
      getPoint={getPoint}
      pointInfo={pointInfo}
      setSectedSeats={setSectedSeats}
      setSeatToBooked={setSeatToBooked}
      setBookedToEmpty={setBookedToEmpty}
      initState={initState}
    />
  );
};

export default connect(
  ({ booking, loading }) => ({
    selectedSeats: booking.selectedSeats,
    person: booking.person,
    movie: booking.movie,
    theater: booking.theater,
    timeData: booking.timeData,
    region: booking.region,
    date: booking.date,
    currentStep: booking.currentStep,
    regiontheater: booking.regiontheater,
    movielist: booking.movielist,
    theaterlist: booking.theaterlist,
    screeninfo: booking.screeninfo,
    seatArr: booking.seatArr,
    userId: booking.userId,
    seatSelected: booking.seatSelected,
    seatSelectedIndex: booking.seatSelectedIndex,
    movies: booking.movies,
    cinemas: booking.cinemas,
    dates: booking.dates,
    group: booking.group,
    InitState: loading.GET_INITSCREENS,
    getSCreensState: loading.GET_SCREENS,
    showTimes: booking.showTimes,
    screenName: booking.screenName,
    setTotalSeat: booking.setTotalSeat,
    totalSeat: booking.totalSeat,
    seatTable: booking.seatTable,
    ticketTokens: booking.ticketTokens,
    pointInfo: booking.pointInfo,
  }),
  {
    initState,
    getSeatTable,
    getInitScreens,
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
    handleseatSelected,
    handleseatSelectedIndex,
    handleSeatArr,
    getScreens,
    initShowTimes,
    initTotal,
    selectScreenName,
    setTotalSeat,
    changeTicketState,
    getPoint,
    setSectedSeats,
    setSeatToBooked,
    setBookedToEmpty,
  }
)(BookingConatainer);
