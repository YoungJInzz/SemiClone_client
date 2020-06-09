import React from "react";

const Movieitems = ({
  movie,
  items,
  selectMovie,
  getScreens,
  theater,
  date,
  getInitScreens,
  group,
  initTotal,
}) => {
  const clickmovie = (item) => {
    if (item.isAvailable === true) {
      selectMovie(item);
      getScreens({
        movieId: item.id,
        cinemaId: theater.id,
        date,
        group,
      });
    } else {
      if (
        window.confirm(
          "해당 상영스케줄이 없습니다.다시 선택하시겠습니까?(선택한 극장 및 날짜가 초기화됩니다)"
        )
      ) {
        initTotal();
        getInitScreens();
      } else {
      }
    }
  };

  return (
    <div>
      <div
        className={
          "movieItem" +
          (items.id === movie.id ? " selected" : "") +
          (items.isAvailable === false ? " blur2" : "")
        }
        onClick={() => clickmovie(items)}
      >
        <span
          className={
            "age " +
            (items.movieRating === "전체"
              ? " all"
              : items.movieRating === "12"
              ? "twe"
              : items.movieRating === "15"
              ? "fif"
              : "nin")
          }
        >
          {items.movieRating}
        </span>
        <span className="title">{items.movieTitle}</span>
      </div>
    </div>
  );
};

export default Movieitems;
