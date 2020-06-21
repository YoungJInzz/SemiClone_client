import axios from "axios";

let host = "54.180.181.212:8080";

export const getInit = () => axios.get(`http://${host}/ticket/screens`);

export const getScreenInfo = (payload) => {
  console.log(payload);
  return axios.get(
    `http://${host}/ticket/screens/info?movieId=${
      payload.movieId === undefined ? "" : payload.movieId
    }&cinemaId=${payload.cinemaId === undefined ? "" : payload.cinemaId}&date=${
      payload.date === undefined || payload.date === "" ? "" : payload.date
    }&group=${payload.group}`
  );
};
export const getSeats = (timeTableId) =>
  axios.get(`http://${host}/ticket/seats?timeTableId=${timeTableId}`);

export const changeTicketState = (payload) => {
  console.log(payload);
  return axios.patch(`http://${host}/ticket/ticketstate`, {
    state: payload.state,
    tickets: payload.ticketId === undefined ? "" : payload.ticketId,
  });
};

export const getPoint = (payload) => {
  return axios.get(`http://${host}/ticket/user/service?accountid=admin`);
};

export const getShowtimeBycinema = (payload) => {
  console.log(payload);
  return axios.get(
    `http://${host}/showtimes/timetables?cinemaId=${payload.cinemaId}&date=${payload.date}`
  );
};
