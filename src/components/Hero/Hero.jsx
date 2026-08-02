import { useEffect, useRef, useState } from "react";
import "./Hero.css";

import handVideo from "../../assets/hero/home/handjoining.webm";
import heroBg from "../../assets/hero/home/bannerbg.png";
import AJImg from "../../assets/hero/home/JA.png";

import lotus from '../../assets/hero/home/lotus3.png'

export default function Hero() {

  const videoRef = useRef(null);
  const [videoFinished, setVideoFinished] = useState(false);
useEffect(() => {
  const video = videoRef.current;

  if (!video) return;

  const startVideo = async () => {
    try {
      video.pause();

      video.currentTime = 0;

      video.playbackRate = 1.25;

      await video.play();
    } catch (error) {
      console.log("Hand video autoplay:", error);
    }
  };

  startVideo();

  return () => {
    video.pause();
    video.currentTime = 0;
  };
}, []);

  /* =====================================================
     KEEP LAST FRAME
  ===================================================== */

  const handleVideoEnd = () => {

    setVideoFinished(true);

    const video = videoRef.current;

    if (!video) return;

    video.pause();

    if (video.duration) {

      video.currentTime =
        Math.max(
          0,
          video.duration - 0.05
        );

    }

  };


  /* =====================================================
     VIEW WEDDING DAY
  ===================================================== */

const handleViewWeddingDay = () => {
  const weddingSection =
    document.getElementById("wedding-details");

  console.log("Wedding section:", weddingSection);

  if (!weddingSection) return;

  weddingSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

  return (
<>
    <section className="hero">


      {/* =================================================
          BACKGROUND
      ================================================= */}

      <img
        src={heroBg}
        className="hero-bg"
        alt=""
      />


      {/* CENTER LIGHT */}

      <div className="hero-center-light" />


      {/* =================================================
          JA MONOGRAM
      ================================================= */}
<div className="hero-monogram">
  <img
    src={AJImg}
    className="hero-monogram-img"
    alt="JA Wedding Monogram"
  />
</div>


      {/* =================================================
          HAND VIDEO
      ================================================= */}

      <div
        className={`
          hero-hands
          ${videoFinished ? "hands-finished" : ""}
        `}
      >

        <video
          ref={videoRef}
          className="hero-hand-video"
          src={handVideo}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
        />


        {/* MEETING GLOW */}

        <div className="hero-hand-glow" />

      </div>


      {/* =================================================
          COUPLE NAMES
      ================================================= */}

      <div className="hero-center">

        <div className="hero-names">

          <h1 className="groom-name">
            Jeevanandham
          </h1>


          <div className="hero-ampersand">

            <span />

            <strong>
              &
            </strong>

            <span />

          </div>


          <h2 className="bride-name">
            Aparna
          </h2>

        </div>

      </div>


      {/* =================================================
          TAGLINE
      ================================================= */}

      <div className="hero-tagline">

        <span className="tagline-line" />

        <p>
          Two souls, divinely united, forever & always.
        </p>

        <span className="tagline-line" />

      </div>


      {/* =================================================
          INVITATION FOOTER
      ================================================= */}

      <div className="hero-footer">

        <div className="hero-footer-inner">


          {/* LEFT ORNAMENT */}

          <div className="footer-ornament">
                        <img src={lotus} className="lotus-img"/>

          </div>


          {/* INVITATION */}

          <div className="footer-copy footer-invitation">

            <span className="footer-eyebrow">
              WITH LOVE & DIVINE BLESSINGS
            </span>

            <p className="footer-main-text">

              We invite you to share in the joy
              of our beautiful beginning

              <br />

              as we step together into a
              lifetime of love.

            </p>

          </div>


          {/* BUTTON */}

       <button
  type="button"
  className="wedding-day-btn"
  onClick={handleViewWeddingDay}
>
  <span>View Our Wedding Day</span>
  <strong>→</strong>
</button>


          {/* BLESSING */}

          <div className="footer-copy footer-blessing">

            <span className="footer-eyebrow">
              YOUR BLESSINGS
            </span>

            <p>

              Your presence and blessings
              will make our celebration

              <br />

              truly unforgettable.

            </p>

          </div>


          {/* RIGHT ORNAMENT */}

          <div className="footer-ornament">
            <img src={lotus} className="lotus-img"/>
          </div>


        </div>

      </div>


      {/* =================================================
          PETALS
      ================================================= */}

      <div className="hero-petals">

        <span className="petal petal-1" />
        <span className="petal petal-2" />
        <span className="petal petal-3" />
        <span className="petal petal-4" />
        <span className="petal petal-5" />
        <span className="petal petal-6" />
        <span className="petal petal-7" />
        <span className="petal petal-8" />
        <span className="petal petal-9" />
        <span className="petal petal-10" />

      </div>


    </section>

</>
  );

}