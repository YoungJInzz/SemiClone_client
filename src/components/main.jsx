import React, { useState, useRef, useEffect } from "react";
import Logo from "../resources/logowhite.svg";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdPower } from "react-icons/io";
import { BsCircleFill, BsCircle } from "react-icons/bs";
const Main = () => {
  const [step, setStep] = useState("");
  const [toggleState, setToggleState] = useState(true);
  const handleStep = (x) => {
    if (step === x) {
      setStep("");
    } else setStep(x);
  };
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  useEffect(() => {
    function watchResize() {
      window.addEventListener("resize", setPayResultPosition);
    }
    watchResize();
    return () => {
      window.removeEventListener("resize", setPayResultPosition);
    };
  });
  const setPayResultPosition = () => {
    if (window.innerWidth < 1415) {
      ref1.current.style.transform = "translateX(-100%)";
      ref2.current.style.transform = "translateX(-100%)";
    } else {
      ref1.current.style.transform = "translateX(0%)";
      ref2.current.style.transform = "translateX(0%)";
    }
  };
  const toggle = () => {
    if (toggleState === false) {
      ref1.current.style.transform = "translateX(0%)";
      ref2.current.style.transform = "translateX(0%)";
      setToggleState(true);
    } else {
      ref1.current.style.transform = "translateX(-100%)";
      ref2.current.style.transform = "translateX(-100%)";
      setToggleState(false);
    }
  };
  return (
    <div>
      <header className="main-header ">
        <a className="logotag" href="http://www.cinerium.net/" ref={ref1}>
          <img className="logo" src={Logo} alt=""></img>
        </a>
        <nav className="navbar">
          <FaBars className="bar-icon" onClick={toggle} ref={ref3} />
        </nav>
      </header>
      <aside className="main-sidebar" ref={ref2}>
        <section className="login">
          <div className="loginBtn">
            <IoMdPower className="powerIcon" />
          </div>
          <div className="loginForm">
            <input className="loginInput" type="text" placeholder="id"></input>
            <input
              className="loginInput"
              type="password"
              placeholder="password"
            ></input>
          </div>
        </section>
        <div className="menuTitle"> Menu</div>
        <section className="sidebar">
          <ul>
            <li className="nav-li">
              <BsCircleFill className="circleFillIcon" />
              영화(개발중)
            </li>
            <li className="nav-li" onClick={() => handleStep("booking")}>
              <BsCircleFill className="circleFillIcon" />
              예매
            </li>
            <ul className={step === "booking" ? " show" : "hide"}>
              <Link to="booking">
                <li className="nav-child-li">
                  <BsCircle className="circleIcon" />
                  빠른예매
                </li>
              </Link>
              <Link to="timetable">
                <li className="nav-child-li">
                  <BsCircle className="circleIcon" />
                  상영시간표
                </li>
              </Link>
            </ul>
            <li className="nav-li">
              <BsCircleFill className="circleFillIcon" />
              극장(개발중)
            </li>
            <li className="nav-li">
              <BsCircleFill className="circleFillIcon" />
              이벤트(개발중)
            </li>
          </ul>
        </section>
      </aside>
    </div>
  );
};
export default Main;
