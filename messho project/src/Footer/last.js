import React from "react";
import "../Footer/last.css";
import Face from "../Footer/facebook.png";
import Insta from "../Footer/instagram.png";
import you from "../Footer/youtube.png";
import link from "../Footer/linkedin.png";
import twit from "../Footer/twitter.png";

function Last() {
  return (
    <div className="footer-box">
      <div className="footer-box1">
        <div className="footer-box2">
          <h1>Shop Non-Stop on Meesho</h1>
          <h5>Trusted by more than 1 Crore Indians</h5>
          <h5>Cash on Delivery | Free Delivery</h5>
          <button>GET IT IN Google play</button>
          <button>Avaliable on the Apple store</button>
        </div>
        <div className="footer-box3">
          <li>Careers</li>
          <li>Become a supplier</li>
          <li>Hall of Fame</li>
          <li>Sitemap</li>
        </div>
        <div className="footer-box4">
          <li>Legal and Policies</li>
          <li>Meesho Tech Blog</li>
          <li>Notices and Returns</li>
        </div>
        <div className="footer-box5">
          <h2>Reach out to us</h2>
          <img src={Face} />
          <img src={Insta} />
          <img src={you} />
          <img src={link} />
          <img src={twit} />
        </div>
        <div className="footer-box6">
          <h3>Contact us</h3>
          <h6>Fashnear Technologies Private</h6>
          <h6>Limited,</h6>
          <h6>CIN: U74900KA2015PTC082263</h6>
          <h6>06-105-B, 06-102, (138 Wu)</h6>
          <h6>Vaishnavi Signature, No. 78/9,</h6>
          <h6>Outer Ring Road, Bellandur,</h6>
          <h6>Varthur Hobli, Bengaluru-560103,</h6>
          <h6>Karnataka, India</h6>
          <h6>E-mail address:</h6>
          <h6>query@meesho.com</h6>
          <h6>© 2015-2023 Meesho.com</h6>
        </div>
      </div>
      <div className="l1"></div>
    </div>
  );
}
export default Last;
