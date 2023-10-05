import Nav from "./component/Nav";
import "../";
import Navsec from "./min-nav/navsec";
import Img from "./img/img";
import Min from "./component/min-div/Min-div";
import Men from "./img2/imgsec.js";
import Imgmessho from "./img3/img3";
import Sidebar from "./card/cardside";
import Last from "./Footer/last";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Navsec />
      <Img />
      <Min />
      <Men />
      <Imgmessho />
      <Sidebar />
      <Last />
    </div>
  );
}
