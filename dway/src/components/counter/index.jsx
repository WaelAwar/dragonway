import CountUp from "react-countup";
import "./styles.css";
import star from "../../assets/sales/5star.png";

export default function Counter() {
  return (
    <div className="count_cont">
      <div className="flexy">
        <div className="logoimg">
          <img src={star} alt="" />
        </div>
        <div className="counter">
          <CountUp end={900} duration={3} />
          <h4>&nbsp; &nbsp; &nbsp;+</h4>
        </div>
      </div>
      <h3 className="sold">Cases Sold</h3>
    </div>
  );
}
