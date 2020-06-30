import React from "react";
import { FaCheck } from "react-icons/fa";

const RightBtn3 = ({ title, currentStep, step }) => {
  return (
    <div 
        className={
          "right-btn" +
          (currentStep !== step ? " hide" : "")
        }
    >
      <div className="rightBtn red">
        <FaCheck className="check" />
        <div className="rightBtn-title">{title}</div>
      </div>
    </div>
  );
};

export default RightBtn3;
