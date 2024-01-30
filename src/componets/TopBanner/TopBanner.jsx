import "./topBanner.scss";

export const TopBanner = () => {
  return (
    <div id="topBanner">
      <img src="../../../public/images/topBanner.png" alt="Подарок" />
      <div className="topBanner__text">
        <p>Black Friday, 24-27 Nov</p>
        <p>
          <span>10%OFF</span>
        </p>
        <p>
          Use code <span>10FRIDAY</span> at checkou
        </p>
      </div>
      <div className="topBanner__button">
        <button className="topBanner__button-shop">Shop now</button>
        <button className="topBanner__button-close">
          <img src="../../../public/images/Close.svg" alt="X" />
        </button>
      </div>
    </div>
  );
};
