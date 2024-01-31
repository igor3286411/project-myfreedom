import React, { useState, useEffect } from "react";
import { TopBanner } from "./componets/TopBanner/TopBanner";
import { BottomBanner } from "./componets/BottomBanner/BottomBanner";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [closeBottomBanner, setCloseBottomBanner] = useState(true);
  const [closeTopBanner, setCloseTopBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const topBanner = document.getElementById("topBanner");
      if (topBanner.getBoundingClientRect().bottom < 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div id="topBanner">
        {closeTopBanner && <TopBanner setCloseTopBanner={setCloseTopBanner} />}
      </div>
      {closeBottomBanner && !localStorage.getItem("closeBottomBanner") && (
        <BottomBanner
          isVisible={isVisible}
          setCloseBottomBanner={setCloseBottomBanner}
        />
      )}
      <div style={{ height: "1500px" }}></div>
    </div>
  );
};

export default App;
