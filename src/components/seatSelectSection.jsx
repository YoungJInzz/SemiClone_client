import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSquareFull } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import SeatRow from "./seatRow";
const Seatselect2Section = ({
  selectedSeats,
  setSeatToBooked,
  setSectedSeats,
  screenName,
  theater,
  timeData,
  date,
  person,
  selectAdult,
  selectTeen,
  selectSenior,
  userId,
  seatSelected,
  seatSelectedIndex,
  handleseatSelected,
  handleseatSelectedIndex,
  handleSeatArr,
  totalSeat,
  seatTable,
  changeTicketState,
  getSeatTable,
  ticketTokens,
  setBookedToEmpty,
}) => {
  // const [seatArrs, setSeatArrs] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    setStartTime(`${timeData.startTime}`);
    setEndTime(`${timeData.endTime}`);
    setDateStr(`${date}`);
  }, [seatTable]);

  const checkAdult = (e) => {
    let totalNum =
      Number(e.target.value) + Number(person.teen) + Number(person.senior);
    totalNum > 8
      ? alert(`최대 예매 가능한 인원수는 8명 까지 입니다.`)
      : totalNum < seatSelected.length
      ? alert("선택한 좌석이 예매 인원 보다 많습니다.")
      : selectAdult(Number(e.target.value));
  };

  const checkTeen = (e) => {
    let totalNum =
      Number(person.adult) + Number(e.target.value) + Number(person.senior);
    totalNum > 8
      ? alert(`최대 예매 가능한 인원수는 8명 까지 입니다.`)
      : totalNum < seatSelected.length
      ? alert("선택한 좌석이 예매 인원 보다 많습니다.")
      : selectTeen(Number(e.target.value));
  };

  const checkSenior = (e) => {
    let totalNum =
      Number(person.adult) + Number(person.teen) + Number(e.target.value);
    totalNum > 8
      ? alert(`최대 예매 가능한 인원수는 8명 까지 입니다.`)
      : totalNum < seatSelected.length
      ? alert("선택한 좌석이 예매 인원 보다 많습니다.")
      : selectSenior(Number(e.target.value));
  };

  const refresh = () => {
    let selectedId = selectedSeats.map((item) => item.ticketId);

    axios.patch("http://54.180.181.212:8080/ticket/ticketstate", {
      state: 1,
      tickets: selectedId,
    });
    selectedSeats.forEach((item) => {
      setBookedToEmpty(item);
    });

    handleseatSelectedIndex([]);
    handleseatSelected([]);
    selectAdult(0);
    selectTeen(0);
    selectSenior(0);
  };

  return (
    <div>
      <div className="seat-header">
        인원/좌석
        <div className="refresh" onClick={() => refresh()}>
          <div className="refresh-title">다시하기</div>
          <IoMdRefresh className="refresh-icon" />
        </div>
      </div>
      <div className="seat-info">
        <div className="seat-person">
          <div className="seat-row">
            <span className="seat-row-title">일반</span>

            <ul className="adult-person">
              <li>
                <button
                  value={0}
                  type="button"
                  className={
                    "person-btn" + (person.adult === 0 ? " select2" : "")
                  }
                  onClick={(e) => checkAdult(e)}
                >
                  0
                </button>
              </li>
              <li>
                <button
                  value={1}
                  className={
                    "person-btn" + (person.adult === 1 ? " select2" : "")
                  }
                  onClick={(e) => checkAdult(e)}
                >
                  1
                </button>
              </li>
              <li>
                <button
                  value={2}
                  className={
                    "person-btn" + (person.adult === 2 ? " select2" : "")
                  }
                  onClick={(e) => checkAdult(e)}
                >
                  2
                </button>
              </li>
              <li>
                <button
                  value={3}
                  className={
                    "person-btn" + (person.adult === 3 ? " select2" : "")
                  }
                  onClick={(e) => checkAdult(e)}
                >
                  3
                </button>
              </li>
              <li>
                <button
                  value={4}
                  className={
                    "person-btn" + (person.adult === 4 ? " select2" : "")
                  }
                  onClick={(e) => checkAdult(e)}
                >
                  4
                </button>
              </li>
              <li>
                <button
                  value={5}
                  className={
                    "person-btn" + (person.adult === 5 ? " select2" : "")
                  }
                  onClick={(e) => checkAdult(e)}
                >
                  5
                </button>
              </li>
              <li>
                <button
                  value={6}
                  className={
                    "person-btn" + (person.adult === 6 ? " select2" : "")
                  }
                  onClick={(e) => checkAdult(e)}
                >
                  6
                </button>
              </li>
              <li>
                <button
                  value={7}
                  className={
                    "person-btn" + (person.adult === 7 ? " select2" : "")
                  }
                  onClick={(e) => checkAdult(e)}
                >
                  7
                </button>
              </li>
              <li>
                <button
                  value={8}
                  className={
                    "person-btn" + (person.adult === 8 ? " select2" : "")
                  }
                  onClick={(e) => checkAdult(e)}
                >
                  8
                </button>
              </li>
            </ul>
          </div>
          <div className="seat-row">
            <span className="seat-row-title">청소년</span>
            <ul className="adult-person">
              <li>
                <button
                  value={0}
                  type="button"
                  className={
                    "person-btn" + (person.teen === 0 ? " select2" : "")
                  }
                  onClick={(e) => checkTeen(e)}
                >
                  0
                </button>
              </li>
              <li>
                <button
                  value={1}
                  type="button"
                  className={
                    "person-btn" + (person.teen === 1 ? " select2" : "")
                  }
                  onClick={(e) => checkTeen(e)}
                >
                  1
                </button>
              </li>
              <li>
                <button
                  value={2}
                  type="button"
                  className={
                    "person-btn" + (person.teen === 2 ? " select2" : "")
                  }
                  onClick={(e) => checkTeen(e)}
                >
                  2
                </button>
              </li>
              <li>
                <button
                  value={3}
                  type="button"
                  className={
                    "person-btn" + (person.teen === 3 ? " select2" : "")
                  }
                  onClick={(e) => checkTeen(e)}
                >
                  3
                </button>
              </li>
              <li>
                <button
                  value={4}
                  type="button"
                  className={
                    "person-btn" + (person.teen === 4 ? " select2" : "")
                  }
                  onClick={(e) => checkTeen(e)}
                >
                  4
                </button>
              </li>
              <li>
                <button
                  value={5}
                  type="button"
                  className={
                    "person-btn" + (person.teen === 5 ? " select2" : "")
                  }
                  onClick={(e) => checkTeen(e)}
                >
                  5
                </button>
              </li>
              <li>
                <button
                  value={6}
                  type="button"
                  className={
                    "person-btn" + (person.teen === 6 ? " select2" : "")
                  }
                  onClick={(e) => checkTeen(e)}
                >
                  6
                </button>
              </li>
              <li>
                <button
                  value={7}
                  type="button"
                  className={
                    "person-btn" + (person.teen === 7 ? " select2" : "")
                  }
                  onClick={(e) => checkTeen(e)}
                >
                  7
                </button>
              </li>
              <li>
                <button
                  value={8}
                  type="button"
                  className={
                    "person-btn" + (person.teen === 8 ? " select2" : "")
                  }
                  onClick={(e) => checkTeen(e)}
                >
                  8
                </button>
              </li>
            </ul>
          </div>
          <div className="seat-row">
            <span className="seat-row-title">우대</span>
            <ul className="adult-person">
              <li>
                <button
                  value={0}
                  type="button"
                  className={
                    "person-btn" + (person.senior === 0 ? " select2" : "")
                  }
                  onClick={(e) => checkSenior(e)}
                >
                  0
                </button>
              </li>
              <li>
                <button
                  value={1}
                  type="button"
                  className={
                    "person-btn" + (person.senior === 1 ? " select2" : "")
                  }
                  onClick={(e) => checkSenior(e)}
                >
                  1
                </button>
              </li>
              <li>
                <button
                  value={2}
                  type="button"
                  className={
                    "person-btn" + (person.senior === 2 ? " select2" : "")
                  }
                  onClick={(e) => checkSenior(e)}
                >
                  2
                </button>
              </li>
              <li>
                <button
                  value={3}
                  type="button"
                  className={
                    "person-btn" + (person.senior === 3 ? " select2" : "")
                  }
                  onClick={(e) => checkSenior(e)}
                >
                  3
                </button>
              </li>
              <li>
                <button
                  value={4}
                  type="button"
                  className={
                    "person-btn" + (person.senior === 4 ? " select2" : "")
                  }
                  onClick={(e) => checkSenior(e)}
                >
                  4
                </button>
              </li>
              <li>
                <button
                  value={5}
                  type="button"
                  className={
                    "person-btn" + (person.senior === 5 ? " select2" : "")
                  }
                  onClick={(e) => checkSenior(e)}
                >
                  5
                </button>
              </li>
              <li>
                <button
                  value={6}
                  type="button"
                  className={
                    "person-btn" + (person.senior === 6 ? " select2" : "")
                  }
                  onClick={(e) => checkSenior(e)}
                >
                  6
                </button>
              </li>
              <li>
                <button
                  value={7}
                  type="button"
                  className={
                    "person-btn" + (person.senior === 7 ? " select2" : "")
                  }
                  onClick={(e) => checkSenior(e)}
                >
                  7
                </button>
              </li>
              <li>
                <button
                  value={8}
                  type="button"
                  className={
                    "person-btn" + (person.senior === 8 ? " select2" : "")
                  }
                  onClick={(e) => checkSenior(e)}
                >
                  8
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="seat-time">
          <div className="seat-time-row">
            <div className="seat-time-content thea">
              cgv {theater.cinemaName}
            </div>
            <div className="seat-time-content scr">{screenName}</div>
            <div className="seat-time-content thea">
              남은좌석 {`${timeData.emptySeat}/${totalSeat}`}
            </div>
          </div>
          <div className="seat-time-row">
            <div className="seat-time-time">{`${dateStr.substring(
              0,
              4
            )}/${dateStr.substring(4, 6)}/${dateStr.substring(6, 8)}`}</div>
            <div className="seat-time-time">{`${startTime.substring(
              0,
              2
            )}:${startTime.substring(2, 4)}~${endTime.substring(
              0,
              2
            )}:${endTime.substring(2, 4)}`}</div>
          </div>
        </div>
      </div>
      <div
        className={
          "seat-main" +
          (person.adult === 0 && person.teen === 0 && person.senior === 0
            ? " blur"
            : "")
        }
      >
        <div className="seat-screen">
          <div className="screen-img">screen</div>
          <div className="opening-container">
            {seatTable.map((item, rowIndex) => (
              <SeatRow
                seatTable={seatTable}
                rowIndex={rowIndex}
                item={item}
                userId={userId}
                seatSelected={seatSelected}
                seatSelectedIndex={seatSelectedIndex}
                handleseatSelected={handleseatSelected}
                handleseatSelectedIndex={handleseatSelectedIndex}
                handleSeatArr={handleSeatArr}
                person={person}
                changeTicketState={changeTicketState}
                timeData={timeData}
                getSeatTable={getSeatTable}
                setSectedSeats={setSectedSeats}
                setSeatToBooked={setSeatToBooked}
              />
            ))}
          </div>
        </div>
        <div className="legend">
          <div className="legend-content">
            <div className="legend-row">
              <FaSquareFull className="seat-icon-selected" />
              <div className="seat-icon-title">선택완료</div>
            </div>
            <div className="legend-row">
              <FaSquareFull className="seat-icon-selectable" />
              <div className="seat-icon-title">선택가능</div>
            </div>
            <div className="legend-row">
              <FaSquareFull className="seat-icon-booked" />
              <div className="seat-icon-title">예매완료</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seatselect2Section;
