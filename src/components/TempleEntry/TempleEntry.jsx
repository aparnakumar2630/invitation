import "./TempleEntry.css";
import { useState } from "react";

import templeFrame from "../../assets/hero/door/temple-frame3.png";
import leftDoor from "../../assets/hero/door/right-door.png";
import rightDoor from "../../assets/hero/door/left-door.png";

import Hero from "../Hero/Hero";

export default function TempleEntry() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (open) return;

    // IMPORTANT:
    // Hero gets mounted only now.
    // Therefore hand video starts only after click.
    setOpen(true);
  };

  return (
    <div className={`entry-wrapper ${open ? "opening" : ""}`}>

      {/* ==========================================
          HERO
          Mount ONLY after button click
      ========================================== */}

      {open && (
        <div className="entry-hero">
          <Hero />
        </div>
      )}


      {/* ==========================================
          TEMPLE ENTRANCE
      ========================================== */}

      <div className="temple-camera">

        <img
          src={templeFrame}
          className="temple-frame"
          alt="Temple entrance"
        />


        {/* ========================================
            DOORS
        ======================================== */}

        <div className="door-container">

          <img
            src={leftDoor}
            className="left-door"
            alt=""
          />

          <img
            src={rightDoor}
            className="right-door"
            alt=""
          />


          {/* ======================================
              FRONT WELCOME CONTENT
          ====================================== */}

          <div className="temple-welcome">

            {/* ENTER BUTTON */}

            <button
              type="button"
              className="temple-enter-btn"
              onClick={handleOpen}
            >
              <span className="enter-btn-shine" />

              <span className="enter-btn-content">

                <span className="enter-icon">
                  ❧
                </span>

                <span className="enter-text">
                  Enter Our Celebration
                </span>

                <span className="enter-arrow">
                  →
                </span>

              </span>
            </button>


            <span className="welcome-bottom">
              BEGIN THE JOURNEY
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}