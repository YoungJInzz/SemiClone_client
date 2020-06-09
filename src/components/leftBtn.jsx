import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
const LeftBtn1 = ({
  setBookedToEmpty,
  selectedSeats,
  moveToBefore,
  currentStep,
  selectAdult,
  selectTeen,
  selectSenior,
  handleseatSelected,
  handleseatSelectedIndex,
  ticketTokens,
  changeTicketState,
}) => {
  const handlePage = () => {
    let selectedId = selectedSeats.map((item) => item.ticketId);
    axios.patch("http://54.180.181.212:8080/ticket/ticketstate", {
      state: 1,
      tickets: selectedId,
    });
    handleseatSelectedIndex([]);
    selectedSeats.forEach((item) => {
      setBookedToEmpty(item);
    });
    moveToBefore();
    handleseatSelected([]);
    selectAdult(0);
    selectTeen(0);
    selectSenior(0);
  };
  return (
    <div
      className={"leftBtn" + (currentStep !== 2 ? " hide" : "")}
      onClick={() => {
        changeTicketState({ state: "1", ticketTokens: ticketTokens });
        handlePage();
      }}
    >
      <FaArrowLeft className="rightArrow" />
      <div className="rightBtn-title">영화선택</div>
    </div>
  );
};

export default LeftBtn1;
