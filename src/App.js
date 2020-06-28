import React, { useEffect, memo } from "react";
import Main from "./components/main";
import { Route } from "react-router-dom";
import TimetableByCinemaContainer from "./containers/timetableByCinemaContainer";
import BookingContainer from "./containers/bookingContainer";
import BookingConatainerFromTimetable from "./containers/bookingFromTimetableContainer";
const App = memo(() => {
  return (
    <>
      <Main />
      <Route path="/timetable" component={TimetableByCinemaContainer} />
      <Route path="/booking" component={BookingContainer} />
      <Route
        path="/bookingFromTimetable"
        component={BookingConatainerFromTimetable}
      />
    </>
  );
});

export default memo(App);
