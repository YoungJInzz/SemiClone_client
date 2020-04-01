import React, { memo } from "react";

const Footer = memo(() => {
  return (
    <>
      <div className="sect-smuse">
        <div className="footer-container clearfix">
          <ul>
            <li>
              <a href="#dx" className="dx">
                4DX
              </a>
            </li>
            <li>
              <a href="#imax" className="imax">
                IMAX
              </a>
            </li>
            <li>
              <a href="#screenx" className="screenx">
                screenx
              </a>
            </li>
            <li>
              <a href="#spherex" className="spherex">
                Spherex
              </a>
            </li>
            <li>
              <a href="#tempur" className="tempur">
                Tempur
              </a>
            </li>
            <li>
              <a href="#gold" className="gold">
                Gold Class
              </a>
            </li>
            <li>
              <a href="#cine" className="cine">
                Cine de Chef
              </a>
            </li>
            <li>
              <a href="#cinema" className="cinema">
                The Private Cinema
              </a>
            </li>
            <li>
              <a href="" className="kids">
                Cine Kids
              </a>
            </li>
            <li>
              <a href="" className="cinenforet">
                Cine & Foret
              </a>
            </li>
          </ul>
        </div>
      </div>

      <footer id="footer">
        <div className="inner-container clearfix"></div>
      </footer>
    </>
  );
});

export default memo(Footer);
