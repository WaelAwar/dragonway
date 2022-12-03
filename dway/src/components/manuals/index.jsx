import fusionx from "./../../assets/sales/fusionx.png";
import qrfusion from "./../../assets/sales/fusionqr.png";
import qrplasma from "./../../assets/sales/plasmaqr.png";
import plasma500 from "./../../assets/sales/plasma.png";
import "./styles.css";
export default function Manuals() {
  return (
    <div className="manual_cont">
      <div className="manuals">
        <div className="manual_grid fuss">
          <div className="fusionx">
            <img src={fusionx} alt="" />
          </div>
          <h1 className="scan">FusionX Manual</h1>
          <div className="download">
            <img src={qrfusion} alt="" />
            <button class="button-36">Download PDF</button>
          </div>
        </div>
        <div className="manual_grid plass">
          <div className="plasma500">
            <img src={plasma500} alt="" />
          </div>
          <h1 className="scan">Plasma500 Manual</h1>
          <div className="download">
            <img src={qrplasma} alt="" />
            <button class="button-36">Download PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
}
