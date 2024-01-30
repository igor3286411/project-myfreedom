import React, { useState, useEffect } from "react";
import { TopBanner } from "./componets/TopBanner/TopBanner";
import { BottomBanner } from "./componets/BottomBanner/BottomBanner";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const topBanner = document.getElementById("topBanner");
      const bottomBanner = document.getElementById("bottomBanner");

      // Проверяем, если верхний баннер покинул область видимости
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
      <TopBanner />
      {isVisible && <BottomBanner isVisible={isVisible}/>}
      <div style={{ height: "1500px" }}>Контент страницы...</div>
    </div>
  );
};

export default App;
