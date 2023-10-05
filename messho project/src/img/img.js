import React from "react";
import "./img.css";
import Delivery from "./deli.png";
import Cash from "./cash.png";
import Return from "./return.png";
function Img() {
  return (
    <div className="img-1">
      <div className="img-2">
        <h1>Lowest Prices</h1>
        <h1>Best Quality Shopping</h1>
        <div className="img-4">
          <div className="img-5">
            <img src={Delivery} />
            <h5>Easy delivery</h5>
            <img src={Cash} />
            <h5>Cash on Delivery</h5>
            <img src={Return} />
            <h5>Easy Returns</h5>
          </div>
          <div className="btn">
            <button>Download The Meesho APP</button>
          </div>
        </div>
      </div>
      <div className="img-3">
        <div class="rightmain">
          <img src="https://images.meesho.com/images/marketing/1687149525469_512.webp" />
        </div>
      </div>
    </div>
  );
}
export default Img;
