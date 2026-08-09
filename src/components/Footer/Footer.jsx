import React, { useState } from "react";
import "./Footer.css";

import monogram from "../../assets/hero/Footer/JA.png";
import lotus from "../../assets/hero/Footer/lotus.png";
import heart from "../../assets/hero/Footer/heart.png";
import flower from "../../assets/hero/Footer/flower.png";
import lotus2 from "../../assets/hero/Footer/lotus2.png";
import FooterPallaku from "../../assets/hero/Footer/pallaku.png";
import line from "../../assets/hero/Footer/hori_line.png";

const Footer = () => {
  const [showInstagram, setShowInstagram] = useState(false);
  const [copied, setCopied] = useState("");

  const groomInstagram =
    "https://www.instagram.com/crazy_anyone_2630/";

  const brideInstagram =
    "https://www.instagram.com/aparna_truth_lier/";

  const groomFacebook =
    "https://www.facebook.com/crazy_anyone_2630";

  const whatsappNumber = "919360681359";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const copyInstagram = async (username, type) => {
    try {
      await navigator.clipboard.writeText(username);

      setCopied(type);

      setTimeout(() => {
        setCopied("");
      }, 1800);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const closeInstagramPopup = () => {
    setShowInstagram(false);
    setCopied("");
  };

  return (
    <footer className="footer-body">

      {/* ================= DECORATIVE FLOWERS ================= */}

      <div className="footer-flower footer-flower-left">
        <img
          src={flower}
          alt=""
          className="footer-flower"
        />
      </div>

      <div className="footer-flower footer-flower-right">
        <img
          src={lotus2}
          alt=""
          className="footer-flower-right2"
        />
      </div>


      {/* ================= MAIN FOOTER ================= */}

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


          {/* ================= SOCIALS ================= */}

          <div className="footer-socials">

            {/* INSTAGRAM */}

           <button
  type="button"
  className="footer-social-btn"
  aria-label="Instagram"
  onClick={() => setShowInstagram(true)}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    className="instagram-svg"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="#FFFFFF"
      strokeWidth="1.8"
    />

    <circle
      cx="12"
      cy="12"
      r="4"
      stroke="#FFFFFF"
      strokeWidth="1.8"
    />

    <circle
      cx="17.5"
      cy="6.5"
      r="1"
      fill="#FFFFFF"
    />
  </svg>
</button>

            {/* FACEBOOK */}

            <a
              href={groomFacebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="footer-social-btn"
            >
              <span className="facebook-icon"><svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  className="facebook-svg"
>
  <path
    d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.6.4-1 1-1Z"
    fill="#FFFFFF"
  />
</svg></span>
            </a>


            {/* WHATSAPP */}

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hi Jeeva & Aparna ❤️"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="footer-social-btn"
            >
              <span className="whatsapp-icon"><svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="#FFFFFF"
  className="whatsapp-svg"
>
  <path d="M12.04 2.01a9.91 9.91 0 0 0-8.52 15.02L2 22l5.11-1.49a9.92 9.92 0 1 0 4.93-18.5Zm0 18.1a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.03.88.91-2.95-.2-.3a8.18 8.18 0 1 1 6.78 3.69Z"/>

  <path d="M17.06 14.19c-.28-.14-1.65-.81-1.91-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.08-.16.19-.33.21-.61.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.38-1.63-1.54-1.91-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.87-2.11-.23-.55-.46-.48-.64-.49h-.54c-.19 0-.49.07-.75.35-.26.28-1  .98-1 2.39s1.03 2.77 1.17 2.96c.14.19 2.02 3.08 4.9 4.32.69.3 1.23.48 1.65.62.69.22 1.31.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.12-.26-.19-.54-.33Z"/>
</svg></span>
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


          {/* Pallaku */}

          <div className="footer-temple">
            <img
              src={FooterPallaku}
              alt=""
            />
          </div>

        </div>

      </div>


      {/* ================= COPYRIGHT ================= */}

      <div className="footer-bottom">

        <div className="footer-bottom-decoration">
          ✦
        </div>

        <p>
          © 2026 Jeevanandham &amp; Aparna Wedding.
          All rights reserved.
        </p>

        <button
          className="footer-top-button"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>

      </div>


      {/* =====================================================
          INSTAGRAM POPUP
      ====================================================== */}

      {showInstagram && (
        <div
          className="instagram-modal-overlay"
          onClick={closeInstagramPopup}
        >

          <div
            className="instagram-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close */}

            <button
              className="instagram-modal-close"
              onClick={closeInstagramPopup}
              aria-label="Close"
            >
              X
            </button>


            {/* Header */}

            <div className="instagram-modal-icon">
               <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    className="instagram-svg2"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="#FFFFFF"
      strokeWidth="1.8"
    /><circle
      cx="12"
      cy="12"
      r="4"
      stroke="#FFFFFF"
      strokeWidth="1.8"
    />

    <circle
      cx="17.5"
      cy="6.5"
      r="1"
      fill="#FFFFFF"
    />
  </svg>
            </div>

            <p className="instagram-modal-small">
              FOLLOW OUR JOURNEY
            </p>

            <h2>
              Find Us on Instagram
            </h2>

            <div className="instagram-modal-divider">
              <span>✦</span>
            </div>


            {/* ================= GROOM ================= */}

            <div className="instagram-profile">

              <div className="instagram-profile-info">

                <span className="instagram-profile-label">
                  GROOM
                </span>

                <a
                  href={groomInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-username"
                >
                  @crazy_anyone_2630
                </a>

              </div>

              <button
                className="instagram-copy-btn"
                onClick={() =>
                  copyInstagram(
                    groomInstagram,
                    "groom"
                  )
                }
                aria-label="Copy groom Instagram"
              >
                {copied === "groom" ? "✓" : "⧉"}
              </button>

            </div>


            {/* ================= BRIDE ================= */}

            <div className="instagram-profile">

              <div className="instagram-profile-info">

                <span className="instagram-profile-label">
                  BRIDE
                </span>

                <a
                  href={brideInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-username"
                >
                  @aparna_truth_lier
                </a>

              </div>

              <button
                className="instagram-copy-btn"
                onClick={() =>
                  copyInstagram(
                   brideInstagram,
                    "bride"
                  )
                }
                aria-label="Copy bride Instagram"
              >
                {copied === "bride" ? "✓" : "⧉"}
              </button>

            </div>


            <p className="instagram-modal-footer">
              Tap a username to visit the profile
            </p>

          </div>

        </div>
      )}

    </footer>
  );
};

export default Footer;