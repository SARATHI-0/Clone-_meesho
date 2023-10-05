import React from "react";
import "./style.css";
function Nav() {
  return (
    <nav className="nav-name">
      <div className="nav-box">
        <div className="nav-head">
          <h1>messho</h1>
          <input type="search" placeholder="search the item"></input>
        </div>
        <div className="nav-leftoption">
          <div className="nav-leftoption1">
            <h3>Download App</h3>
            <h3>Become Seller</h3>
            <h3>Profile</h3>
            <h3>placeholder</h3>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
