import React, { memo } from "react";
import CGVlogo from "../resources/cgv_logo.png";

const navigation = memo(() => {
  return (
    <>
        <div className="nav-container clearfix">
          <h1 className="logo">
            <a href="#home"><img src={CGVlogo}></img></a>
          </h1>
          <nav className="m-gnb">
            <h2 className="hidden">주요메뉴</h2>
            <ul className="links clearfix">
              <li>
                <a href="#Login">로그인</a>
              </li>
              <li>
                <a href="#SignUp">회원가입</a>
              </li>
              <li>
                <a href="#MyCgv">MyCGV</a>
              </li>
              <li>
                <a href="#GiftShop">기프트샵</a>
              </li>
            </ul>
          </nav>
        </div>
    </>
  );
});

export default memo(navigation);
