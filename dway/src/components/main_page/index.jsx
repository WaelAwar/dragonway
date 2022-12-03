import latvia from "../../assets/sales/6.png";
import lithuania from "../../assets/sales/5.png";
import estonia from "../../assets/sales/4.png";
import pc1 from "../../assets/sales/7.png";
import pc2 from "../../assets/sales/8.png";
import pc3 from "../../assets/sales/9.png";
import "./styles.css";

export default function MainPage() {
  return (
    <div className="main_cont">
      <h1 className="store">RETAIL</h1>
      <div className="main_grid">
        <div className="box ">
          <div className="boxx">
            <h1 className="buyy">Latvia</h1>
            <img src={latvia} alt="" />
          </div>
          <div className="pc">
            <img src={pc1} alt="" />
          </div>
          <div className="buybutton">
            <button className="glow-on-hover">Visit Store</button>
          </div>
        </div>

        <div className="box ">
          <div className="boxx">
            <h1 className="buyy">Lithuania</h1>
            <img src={lithuania} alt="" />
          </div>
          <div className="pc">
            <img src={pc2} alt="" />
          </div>
          <div className="buybutton ">
            <button className="glow-on-hover">Visit Store</button>
          </div>
        </div>
        <div className="box ">
          {" "}
          <div className="boxx">
            <h1 className="buyy">Estonia</h1>
            <img src={estonia} alt="" />
          </div>
          <div className="pc">
            <img src={pc3} alt="" />
          </div>
          <div className="buybutton">
            <button className="glow-on-hover">Visit Store</button>
          </div>
        </div>
      </div>
    </div>
  );
}
