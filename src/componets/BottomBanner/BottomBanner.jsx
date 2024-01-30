import "./bottomBanner.scss";

export const BottomBanner = ({ isVisible }) => {
  return (
    <div id="bottomBanner" className="open">
      <div className="bottomBanner__text">
        <h2>Black Friday</h2>
        <h3>
          <span>10%OFF</span>
        </h3>
        <p>
          Use code <span>10FRIDAY</span> at checkout
        </p>
        <button>Shop now through Monday</button>
      </div>
      <div className="bottomBanner__close"></div>
    </div>
  );
};
