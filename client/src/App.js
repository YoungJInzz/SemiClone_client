import React, { memo } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = memo(() => {
  return (
    <>
      <div className="App">
        <>
          <Navigation />

          <Footer />
        </>
      </div>
    </>
  );
});

export default memo(App);
