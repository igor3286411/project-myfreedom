import { useRef } from "react";

export const TextTopBanner = () => {
  const windowWidth = useRef(window.innerWidth);

  if (windowWidth.current > 1000) {
    return (
      <div className="topBanner__text">
        <p>Black Friday, 24-27 Nov</p>
        <p>
          <span>10%OFF</span>
        </p>
        <p>
          Use code <span>10FRIDAY</span> at checkou
        </p>
      </div>
    );
  }

  if (windowWidth.current > 720) {
    return (
      <div className="topBanner__text">
        <p>Black Friday</p>
        <p>
          <span>10%OFF</span>
        </p>
        <p>
          Use code <span>10FRIDAY</span>
        </p>
      </div>
    );
  }

  if (windowWidth.current <= 720) {
    return (
      <div className="topBanner__text">
        <p>Black Friday,</p>
        <p>
          <span>10%OFF</span>
        </p>
      </div>
    );
  }
};
