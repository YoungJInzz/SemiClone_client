import React, { useEffect, useState } from "react";
import {
  FaHandPointRight,
  FaRegHandPointLeft,
  FaRegHandPointRight,
  FaCaretRight,
} from "react-icons/fa";
import { useHistory } from "react-router-dom";
import loadingImg from "../resources/loading.gif";

const TimetableByCinema = ({
  cinemas,
  region,
  selectRegion,
  theater,
  selectTheater,
  getScreens,
  dates,
  date,
  getShowtimeByCinema,
  selectDate,
  showtimeBycinema,
  loading,
  selectScreenName,
  selectScreen,
  selectMovie,
}) => {
  const [regionCinemas, setRegionCinemas] = useState([]);
  const [datesDivision, setDatesDivison] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    // initState();
    getShowtimeByCinema({ cinemaId: theater.id, date });
    setDatesDivison(divideDates(dates));
    if (dates.length !== 0) {
      selectDate(dates[0].date);
    }
    for (let item of cinemas) {
      if (item.cinemaArea === region.cinemaArea) {
        setRegionCinemas(item.cinemaList);
      }
    }
  }, [dates, region]);

  const history = useHistory();

  const changePage = () => {
    history.push("/bookingFromTimetable");
  };
  const divideDates = (dates) => {
    const copyDates = JSON.parse(JSON.stringify(dates));
    const chunk = [];
    const chunk2 = [];
    for (let i of copyDates) {
      if (i.isVailable === true) {
        chunk2.push(i);
      }
    }
    while (chunk2.length) chunk.push(chunk2.splice(0, 8));
    return chunk;
  };

  const moveToNext = () => {
    page < datesDivision.length - 1 ? setPage(page + 1) : setPage(page);
  };
  const moveToBefore = () => {
    page > 0 ? setPage(page - 1) : setPage(page);
  };
  return (
    <div className="cinemasContainer">
      <div className="cinemas">
        <div className="selectMenu">
          <span className="col1">
            <FaHandPointRight className="icon" />
            극장별 상영시간표
          </span>
          <span className="col2">영화별 상영표(개발중)</span>
        </div>
        <div className="regionList2">
          {cinemas.map((item) => (
            <span
              className={
                item.cinemaArea === region.cinemaArea
                  ? " region-selected"
                  : "col"
              }
              onClick={() => selectRegion(item)}
            >
              {item.cinemaArea}
            </span>
          ))}
        </div>
        <div className="cinemaList">
          {regionCinemas.map((item) => (
            <span
              className={item.id === theater.id ? " theater-selected" : "col"}
              onClick={() => {
                selectTheater(item);
                getScreens({
                  cinemaId: item.id,
                  date: date,
                });
                getShowtimeByCinema({ cinemaId: item.id, date });
              }}
            >
              {item.cinemaName}
            </span>
          ))}
        </div>
      </div>
      <div className="timeData-container">
        <div className={"cinemaName"}>
          <span className={theater === "" ? " hide" : ""}>
            {" "}
            CGV {theater.cinemaName}
          </span>
        </div>
        <div className="datesList">
          <div className="col1">
            <FaRegHandPointLeft onClick={() => moveToBefore()} />
          </div>
          <div className="col2">
            {datesDivision[page] &&
              datesDivision[page].map((item) => (
                <div
                  className={
                    "dateItem2" +
                    (item.isVailable === false ? " hide" : "") +
                    (item.date === date ? " picked" : "")
                  }
                  onClick={() => {
                    selectDate(item.date);
                    getShowtimeByCinema({
                      cinemaId: theater.id,
                      date: item.date,
                    });
                  }}
                >
                  {`${item.date}`.substring(6, 8)}
                </div>
              ))}
          </div>
          <dvi className="col3">
            <FaRegHandPointRight onClick={() => moveToNext()} />
          </dvi>
        </div>
        <img
          className={"loading" + (loading === false ? " hide" : "")}
          src={loadingImg}
          alt="불러오는중..."
        />
        <div className="showtimeContainer">
          {showtimeBycinema.map((item) => (
            <div className="movieContainer">
              <div className="showtime-movie-title">
                <span
                  className={
                    "age2 " +
                    (item.movie.movieRating === "전체"
                      ? " all"
                      : item.movie.movieRating === "12"
                      ? "twe"
                      : item.movie.movieRating === "15"
                      ? "fif"
                      : "nin")
                  }
                >
                  {item.movie.movieRating === "전체"
                    ? "All"
                    : item.movie.movieRating}
                </span>
                <span className="title">{item.movie.movieTitle}</span>
              </div>
              <div className="showtime-cinemasContainer">
                {item.screens.map((item2) => (
                  <div className="showtime-cinema">
                    <FaCaretRight className="right-icon2" />
                    <span className="col1">{item2.screen.name}</span>
                    <span className="col2">총 {item2.screen.totalSeat}석</span>
                    <div>
                      {item2.timeTables.map((item3) => (
                        <div
                          className={
                            "time-container" +
                            (item3.emptySeat === 0 ? " blur" : "")
                          }
                          onClick={() => {
                            selectScreenName(item2.screen.name);
                            selectScreen(item3);
                            selectMovie(item.movie);
                            changePage();
                          }}
                        >
                          <div className="time-item">
                            {`${item3.startTime}`.substring(0, 2)}:
                            {`${item3.startTime}`.substring(2, 4)}
                          </div>
                          <dvi
                            className={
                              "time-emptySeat" +
                              (item3.emptySeat === 0
                                ? " red-font"
                                : " blue-font")
                            }
                          >
                            {item3.emptySeat}석
                          </dvi>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimetableByCinema;
