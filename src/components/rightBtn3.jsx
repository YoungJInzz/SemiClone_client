import React from "react";
import { FaCheck } from "react-icons/fa";

const RightBtn3 = ({ title, currentStep, step }) => {
  return (
    <div className={"rightBtn3 red" + (currentStep !== step ? " hide" : "")}>
      <FaCheck className="check" />
      <div className="rightBtn3-title">{title}</div>
    </div>
  );
};

export default RightBtn3;
