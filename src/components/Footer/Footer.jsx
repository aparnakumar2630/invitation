import React from "react";
import "./Footer.css";

import monogram from "../../assets/hero/Footer/JA.png";
import lotus from "../../assets/hero/Footer/lotus.png";
import heart from "../../assets/hero/Footer/heart.png";
import flower from "../../assets/hero/Footer/flower.png";
import lotus2 from "../../assets/hero/Footer/lotus2.png";
import FooterKrishnan from "../../assets/hero/Footer/FooterKrishnan.png";
import FooterPallaku from "../../assets/hero/Footer/pallaku.png";

import line from "../../assets/hero/Footer/hori_line.png";

// If you have a temple silhouette image, use it here
// import temple from "../../assets/hero/Footer/temple.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-body">

      {/* Decorative flowers */}
      <div className="footer-flower footer-flower-left">
        <img src={flower} className="footer-flower"/>
      </div>

      <div className="footer-flower footer-flower-right">
               <img src={lotus2} className="footer-flower-right2"/>
      </div>

      <div className="footer-main">

        {/* ================= LEFT ================= */}
        <div className="footer-column footer-love">

          <img
            src={monogram}
            alt="JA Monogram"
            className="footer-monogram"
          />

          <p className="footer-quote">
            Two Hearts, One Soul,
            <br />
            A Lifetime of Love.
          </p>

          <div className="footer-socials">

            <a href="#" aria-label="Instagram">
              <span>◎</span>
            </a>

            <a href="#" aria-label="Facebook">
              <span>f</span>
            </a>

            <a href="#" aria-label="WhatsApp">
              <span>◉</span>
            </a>

          </div>

        </div>


        {/* ================= CENTER ================= */}
        <div className="footer-column footer-thanks">

          <h2>THANK YOU</h2>

          <div className="footer-small-divider">
            <span>✦</span>
          </div>

          <p>
            Your love, blessings and presence
            <br />
            mean the world to us.
            <br />
            We can't wait to celebrate
            <br />
            with you!
          </p>

          <img
            src={lotus}
            alt=""
            className="footer-lotus"
          />

        </div>


        {/* ================= RIGHT ================= */}
        <div className="footer-column footer-couple">

          <p className="with-love">
            With Love,
          </p>

          <h3>
            Jeevanandham &amp; Aparna
          </h3>

          <div className="footer-heart-line">

            <img
              src={line}
              alt=""
              className="footer-line"
            />

            <img
              src={heart}
              alt=""
              className="footer-heart"
            />

            <img
              src={line}
              alt=""
              className="footer-line footer-line-right"
            />

          </div>

          {/* Temple silhouette */}
          <div className="footer-temple">
            <img src={FooterPallaku}/>
          </div>

        </div>

      </div>


      {/* ================= COPYRIGHT ================= */}

      <div className="footer-bottom">

        <div className="footer-bottom-decoration">
          ✦
        </div>

        <p>
          © 2026 Jeevanandham &amp; Aparna Wedding. All rights reserved.
        </p>

        <button
          className="footer-top-button"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>

      </div>

    </footer>
  );
};

export default Footer;