import "./bottomBanner.scss";
import { useRef } from "react";

export const BottomBanner = ({ isVisible, setCloseBottomBanner }) => {


  const windowWidth = useRef(window.innerWidth);

  const closeBottomBanner = () =>{
    setCloseBottomBanner(false)
    localStorage.setItem("closeBottomBanner", JSON.stringify(true));
  }

  
  return (
    <div id="bottomBanner" className={isVisible ? "open" : "close"}>
      <div className="bottomBanner__text">
        <h2>Black Friday</h2>
        <h3>
          <span>10%OFF</span>
        </h3>
        <p>
          Use code <span>10FRIDAY</span> at checkout
        </p>
        <button>
          {windowWidth.current > 450 ? "Shop now through Monday" : "Shop now"}
        </button>
      </div>
      <div className="bottomBanner__close" onClick={() => closeBottomBanner()}></div>
    </div>
  );
};
