import React, { useEffect } from "react";
import * as api from "../lib/api";
import { connect, useDispatch } from "react-redux";
import axios from "axios";
import {
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
} from "../modules/booking";
import Booking from "../components/booking";

const BookingConatainer = ({
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
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log("as");
    // const getUsers = async () => {
    //   let res = await api.getInit();
    //   console.log(res.data);
    // };
    // getUsers();
    getInitScreens();
  }, []);

  return (
    <Booking
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
    />
  );
};

export default connect(
  ({ booking }) => ({
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
  }),
  {
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
  }
)(BookingConatainer);
