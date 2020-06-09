import React, { useState, useEffect } from "react";
import axios from "axios";

const SeatRow = ({
  seatTable,
  rowIndex,
  item,
  seatSelected,
  handleseatSelected,
  handleseatSelectedIndex,
  person,
  setSectedSeats,
  setSeatToBooked,
}) => {
  const [rowName, setRowName] = useState("");
  const [rowArr, setRowArr] = useState([]);

  useEffect(() => {
    setRowName(Object.keys(item)[0]);
    setRowArr(item[Object.keys(item)[0]]);
  }, [item, rowArr, seatTable]);

  const handleSeat = async (columnIndex, seatNum, ticketId) => {
    const handleBooked = () => {
      let totalPerson = person.adult + person.teen + person.senior;
      let copySeatSelected = JSON.parse(JSON.stringify(seatSelected));
      let reA = /[^a-zA-Z]/g;
      let reN = /[^0-9]/g;
      const sortSeat = (a, b) => {
        var aA = a.replace(reA, "");
        var bA = b.replace(reA, "");
        if (aA === bA) {
          let aN = parseInt(a.replace(reN, ""), 10);
          let bN = parseInt(b.replace(reN, ""), 10);
          return aN === bN ? 0 : aN > bN ? 1 : -1;
        } else {
          return aA > bA ? 1 : -1;
        }
      };

      if (
        totalPerson > seatSelected.length &&
        copySeatSelected.includes(seatNum) === false
      ) {
        copySeatSelected.push(seatNum);
        handleseatSelected(copySeatSelected.sort(sortSeat));
        setSectedSeats([{ rowName, rowIndex, columnIndex, ticketId }]);
        setSeatToBooked({
          rowName: rowName,
          rowIndex: rowIndex,
          columnIndex: columnIndex,
        });
      } else if (totalPerson === seatSelected.length) {
        if (window.confirm("선택이완료되었습니다 다시선택하시겠습니까?")) {
          handleseatSelectedIndex([]);
          handleseatSelected([]);
        } else {
        }
      }
    };
    let returnValue = await axios.patch(
      "http://15.165.162.106:8080/ticket/ticketstate",
      {
        state: 0,
        tickets: [ticketId],
      }
    );
    if (returnValue.data.result === "200") {
      handleBooked();
    } else if ((returnValue.data.result = "500")) {
      alert("이미 예약된 좌석입니다");
    } else {
      alert("잘못된 요청입니다");
    }
  };

  return (
    <div className="opening-row">
      <div className="opening-row-name">{rowName} </div>
      <div className="opening-seat">
        {rowArr.map((seat, Index) => (
          <div>
            <div
              className={
                "opening-item " +
                (seat.ticketState === "0" && seatSelected.includes(seat.seatNo)
                  ? " seatSelected"
                  : "") +
                (seat.ticketState === "2" ||
                (seat.ticketState === "0" &&
                  seatSelected.includes(seat.seatNo) === false)
                  ? " notAvail"
                  : "")
              }
              onClick={() => handleSeat(Index, seat.seatNo, seat.ticketId)}
            >
              {seat.seatNo.substring(1, 2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatRow;
