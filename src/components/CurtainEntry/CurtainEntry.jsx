import { useState } from "react";
import "./CurtainEntry.css";

import Hero from "../Hero/Hero";
import WeddingCountdown from "../Countdown/WeddingCountdown";

import bottomLeftFlower from "../../assets/hero/Curtains/bottom-left-flower.png";
import bottomRightFlower from "../../assets/hero/Curtains/bottom-right-flower.png";
import leftCurtain from "../../assets/hero/Curtains/left-curtain5.png";
import rightCurtain from "../../assets/hero/Curtains/right-curtain5.png";
import monogram from "../../assets/hero/Curtains/monogram.png";
import topFloral from "../../assets/hero/Curtains/top-floral.png";
import bell from "../../assets/hero/Curtains/bell.png";
import lotus from "../../assets/hero/Curtains/lotus.png";
import half_line from '../../assets/hero/home/half_line.png'
import Family from "../Family/Family";

export default function CurtainEntry() {
const [open, setOpen] = useState(false);
const [showHero, setShowHero] = useState(false);
const [hideCurtain, setHideCurtain] = useState(false);

const handleOpen = () => {
  if (open) return;

  setOpen(true);

  setTimeout(() => {
    setShowHero(true);
  }, 200);

  setTimeout(() => {
    setHideCurtain(true);
  }, 200);
};

console.log(showHero,"showHero")

    return (
        <>
            <div className="curtain-wrapper">

{showHero && (
            <div className="entry-hero">

      <Hero />

  </div>
)}

                <div   className={`curtain-screen ${
    open ? "curtain-open" : ""
  } ${hideCurtain ? "hide-curtain" : ""}`}>

                    {/* <img src={topFloral} alt="" className="top-floral" /> */}

                    <img src={bottomLeftFlower} alt="" className="bottom-left" />
                    <img src={bottomRightFlower} alt="" className="bottom-right" />

                    <img
                        src={leftCurtain}
                        alt=""
                        className={`left-curtain ${open ? "open-left" : ""}`}
                    />

                    <img
                        src={rightCurtain}
                        alt=""
                        className={`right-curtain ${open ? "open-right" : ""}`}
                    />
                    <img src={bell} alt="" className="left-bell" />
                    <img src={bell} alt="" className="right-bell" />
                    <div className={`welcome ${open ? "fade-out" : ""}`}>

                        <img
                            src={monogram}
                            alt="AJ"
                            className="monogram"
                        />

                        <div
                            className="tap-btn"
                            onClick={handleOpen}
                        >
                            Tap To Open

                             <span className="enter-arrow">
                    →
                  </span>
                        </div>
                        <div className="lotus-section">
                            <img src={half_line} className="half_line2 me-5" />

                            <img className="lotus-img" src={lotus} />
                            <img src={half_line} className="half_line2 ms-2" />

                        </div>

                    </div>

                </div>

            </div>

     {showHero && (
        <>


            <WeddingCountdown />
            {/* <Family/> */}
            </>

          )}
            </>
    );
}