import React from "react";
import "./PurpleEntry.css";
import purpleEntryImg from "../../assets/hero/PurpleEntry/purpleEntryImg4.png";


const PurpleEntry = () => {
  return (
    <section
      className="purple-entry"
      style={{ backgroundImage: `url(${purpleEntryImg})` }}
    >
      <div className="purple-entry-overlay"></div>

      <div className="purple-entry-content">

        <h1 className="purple-entry-name">
          Jeevanandham
        </h1>

        <div className="purple-entry-and">&</div>

        <h1 className="purple-entry-name">
          Aparna
        </h1>

        <div className="purple-entry-heart">
         <span className="purple-entry-line"></span> ❤  <span className="purple-entry-line"></span>
        </div>

        <p className="purple-entry-subtitle">
          A BEAUTIFUL BEGINNING
          <br />
          AWAITS
        </p>

        <button className="purple-entry-btn">
          <span>Begin Our Journey</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12H19" />
            <path d="M13 6L19 12L13 18" />
          </svg>
        </button>

      </div>
    </section>
  );
};

export default PurpleEntry;