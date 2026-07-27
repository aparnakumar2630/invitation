import "./TempleEntry.css";
import { useState } from "react";

import templeFrame from "../../assets/hero/door/temple-frame3.png";
import leftDoor from "../../assets/hero/door/right-door.png";
import rightDoor from "../../assets/hero/door/left-door.png";

import Hero from "../Hero/Hero";
import WeddingCountdown from "../Countdown/WeddingCountdown";

export default function TempleEntry() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (open) return;

    setOpen(true);
  };

  return (
    <>
      {/* ==========================================
          SCREEN 1
          KEEP YOUR OLD ANIMATION EXACTLY
      ========================================== */}

      <div className={`entry-wrapper ${open ? "opening" : ""}`}>

        {/* HERO IS BEHIND THE TEMPLE

            IMPORTANT:
            Keep this here.

            This is what gives:
            door open -> zoom -> Hero reveal
        */}

        {open && (
          <div className="entry-hero">
            <Hero />
          </div>
        )}


        {/* ==========================================
            TEMPLE + DOORS
        ========================================== */}

        <div className="temple-camera">

          <img
            src={templeFrame}
            className="temple-frame"
            alt="Temple entrance"
          />


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
                ENTER BUTTON
            ====================================== */}

            <div className="temple-welcome">

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


      {/* ==========================================
          SECTION 2

          IMPORTANT:
          OUTSIDE entry-wrapper
      ========================================== */}

      {open && (
        <WeddingCountdown />
      )}

    </>
  );
}