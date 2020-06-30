import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

const RightBtn2 = ({
  title,
  moveToNext,
  currentStep,
  step,
  person,
  seatSelected,
}) => {
  const [totalPerson, setTotalPerson] = useState("");
  useEffect(() => {
    setTotalPerson(person.adult + person.teen + person.senior);
  }, [person]);
  return (
    <div 
        className={
          "right-btn" +
          (currentStep !== step ? " hide" : "")
        }
    >
      <div
        className={
          "rightBtn" +
          (totalPerson === seatSelected.length && totalPerson !== 0
            ? " red"
            : " gray")
        }
        onClick={() => moveToNext()}
      >
        <FaArrowRight className="rightArrow" />
        <div className="rightBtn-title">{title}</div>
      </div>
    </div>
  );
};

export default RightBtn2;
