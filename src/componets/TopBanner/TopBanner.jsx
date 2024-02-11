import { TextTopBanner } from "./TextTopBanner";
import "./topBanner.scss";

export const TopBanner = ({ setCloseTopBanner }) => {
  const closeTopBanner = () => {
    setCloseTopBanner(false);
  };

  return (
    <>
      <img src="../../../public/images/topBanner.png" alt="Подарок" />
      <TextTopBanner />
      <div className="topBanner__button">
        <button className="topBanner__button-shop">Shop now</button>
        <button
          className="topBanner__button-close"
          onClick={() => closeTopBanner()}
        ></button>
        <button className="topBanner__button-next-mobile"></button>
      </div>
    </>
  );
};
