import dwayvmp from "../../assets/videos/dwayv.mp4";
import dwayvog from "../../assets/videos/dwayv.ogv";
import dwayvweb from "../../assets/videos/dwayv.webm";

import "./styles.css";

export default function Video() {
  return (
    <div className="frame1">
      <video width="100%" autoPlay muted loop>
        <source src={dwayvweb} type="video/webm" />
        <source src={dwayvmp} type="video/mp4" />
        <source src={dwayvog} type="video/ogv" />
      </video>
      <h1>
        Just Like a <span>DRAGON</span>
      </h1>
    </div>
  );
}
