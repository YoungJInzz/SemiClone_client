import React, { memo } from "react";
import Movie1 from "../resources/movie1.jpg";
import Movie2 from "../resources/movie2.jpg";
import Movie3 from "../resources/movie3.jpg";
import Movie4 from "../resources/movie4.jpg";

const main = memo(() => {
  return (
    <>
      <div className="main-container clearfix">
        <ul className="movie-list">
          <li className="first">
            <a className="movie-list-info" href="#">
              <p className="rank">1</p>
              <img className="poster" src={Movie1} alt="영화" />
              <div className="warp">
                <div className="summary">
                  "황홀한 사랑, 순수한 희망, 격렬한 열정..."
                  <br />
                  "이 곳에서 모든 감정이 폭발한다!"
                  <br />
                  "꿈을 꾸는 사람들을 위한 별들의 도시 ‘라라랜드’. 재즈
                  피아니스트 ‘세바스찬’(라이언 고슬링)과 배우 지망생 ‘미아’(엠마
                  스톤), 인생에서 가장 빛나는 순간 만난 두 사람은 미완성인
                  서로의 무대를 만들어가기 시작한다."
                </div>
              </div>
            </a>
            <div className="btn-util">
              <button type="button" className="button btn-like">
                1.2k
              </button>
              <div className="book">
                <a href="#" className="button gblue" title="영화예매">
                  예매
                </a>
              </div>
            </div>
          </li>

          <li>
            <a className="movie-list-info" href="#">
              <p className="rank">2</p>
              <img className="poster" src={Movie2} alt="영화" />
              <div className="warp">
                <div className="summary">
                  "[오즈의 마법사]의 영원한 '도로시'"
                  <br />
                  "시대를 초월한 히트송 '오버 더 레인보우'의 주인공"
                  <br />
                  "20세기 최고의 여배우 주디 갈랜드!"
                  <br />
                  <br />
                  "그녀는 자신의 모든 것을 담은"
                  <br />
                  "생애 마지막 무대를 런던에서 준비하는데..."
                  <br />
                  <br />
                  "모두가 숨죽인 가운데 막이 오르고"
                  <br />
                  "레전드 쇼가 시작된다."
                </div>
              </div>
            </a>
            <div className="btn-util">
              <button type="button" className="button btn-like">
                1.2k
              </button>
              <div className="book">
                <a href="#" className="button gblue" title="영화예매">
                  예매
                </a>
              </div>
            </div>
          </li>

          <li>
            <a className="movie-list-info" href="#">
              <p className="rank">3</p>
              <img className="poster" src={Movie3} alt="영화" />
              <div className="warp">
                <div className="summary">
                  "황홀한 사랑, 순수한 희망, 격렬한 열정..."
                  <br />
                  "이 곳에서 모든 감정이 폭발한다!"
                  <br />
                  "꿈을 꾸는 사람들을 위한 별들의 도시 ‘라라랜드’. 재즈
                  피아니스트 ‘세바스찬’(라이언 고슬링)과 배우 지망생 ‘미아’(엠마
                  스톤), 인생에서 가장 빛나는 순간 만난 두 사람은 미완성인
                  서로의 무대를 만들어가기 시작한다."
                </div>
              </div>
            </a>
            <div className="btn-util">
              <button type="button" className="button btn-like">
                1.2k
              </button>
              <div className="book">
                <a href="#" className="button gblue" title="영화예매">
                  예매
                </a>
              </div>
            </div>
          </li>

          <li>
            <a className="movie-list-info" href="#">
              <p className="rank">4</p>
              <img className="poster" src={Movie4} alt="영화" />
              <div className="warp">
                <div className="summary">
                  "황홀한 사랑, 순수한 희망, 격렬한 열정..."
                  <br />
                  "이 곳에서 모든 감정이 폭발한다!"
                  <br />
                  "꿈을 꾸는 사람들을 위한 별들의 도시 ‘라라랜드’. 재즈
                  피아니스트 ‘세바스찬’(라이언 고슬링)과 배우 지망생 ‘미아’(엠마
                  스톤), 인생에서 가장 빛나는 순간 만난 두 사람은 미완성인
                  서로의 무대를 만들어가기 시작한다."
                </div>
              </div>
            </a>
            <div className="btn-util">
              <button type="button" className="button btn-like">
                1.2k
              </button>
              <div className="book">
                <a href="#" className="button gblue" title="영화예매">
                  예매
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
});

export default memo(main);
