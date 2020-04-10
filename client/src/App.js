import React, { memo } from "react";
import Navigation from "./components/Navigation";
import Main from "./components/main";
import Footer from "./components/Footer";

const App = memo(() => {
  return (
    <>
      <div className="App">
        <>
          <Navigation />
          <Main />
          <Footer />
        </>
      </div>
    </>
  );
});

export default memo(App);
