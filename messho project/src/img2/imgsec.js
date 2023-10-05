import React from "react";
import "../img2/imgsec.css";

import Messho1 from "../img2/messho1.png";
import Messho2 from "../img2/messho2.png";
import Messho3 from "../img2/messho3.png";

function Men() {
  return (
    <div className="backcard">
      <div className="backcard-1">
        <div className="backcard-2">
          <img src={Messho1} />
        </div>
        <div className="backcard-3">
          <img src={Messho2} />
          <img src={Messho3} />
        </div>
      </div>
    </div>
  );
}
export default Men;
