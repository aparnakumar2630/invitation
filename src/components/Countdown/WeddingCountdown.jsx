import {
  useEffect,
  useRef,
  useState,
} from "react";

import "./WeddingCountdown.css";
import flower from '../../assets/hero/home/flower3.png'
import borderLine from '../../assets/hero/home/borderline.png'
import half_line from '../../assets/hero/home/half_line.png'
import divider from '../../assets/hero/home/divider.png'
import temple from '../../assets/hero/home/temple.png'
import glass from '../../assets/hero/home/glass.png'
import bg from '../../assets/hero/home/countdownbg1.png'
import hand from '../../assets/hero/home/hand.png'
import sendoor from '../../assets/hero/home/sendoor.jpg'
import location from '../../assets/hero/home/location.png'

/* =========================================================
   WEDDING DATE
========================================================= */

const WEDDING_DATE = new Date(
  "2026-09-17T04:00:00"
);


/* =========================================================
   COUNTDOWN BOX
========================================================= */

function CountdownBox({ value, label }) {
  return (
    <div className="countdown-box">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function WeddingCountdown() {

  const canvasRef = useRef(null);
  const scratchAreaRef = useRef(null);

  const isDrawingRef = useRef(false);
  const lastPointRef = useRef(null);

  const [revealed, setRevealed] =
    useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });


  /* =======================================================
     COUNTDOWN CALCULATION
  ======================================================= */

  useEffect(() => {

    const calculateTime = () => {

      const now = new Date();

      const difference =
        WEDDING_DATE.getTime() -
        now.getTime();


      if (difference <= 0) {

        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }


      const days = Math.floor(
        difference /
        (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (difference /
          (1000 * 60 * 60)) %
        24
      );

      const minutes = Math.floor(
        (difference /
          (1000 * 60)) %
        60
      );

      const seconds = Math.floor(
        (difference / 1000) % 60
      );


      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });

    };


    calculateTime();


    const interval =
      setInterval(
        calculateTime,
        1000
      );


    return () =>
      clearInterval(interval);

  }, []);


  /* =======================================================
     FORMAT NUMBER
  ======================================================= */

  const formatNumber = (number) => {

    return String(number).padStart(
      2,
      "0"
    );

  };


  /* =======================================================
     DRAW SCRATCH CARD
  ======================================================= */

  useEffect(() => {

    if (revealed) return;


    const canvas =
      canvasRef.current;

    const scratchArea =
      scratchAreaRef.current;


    if (!canvas || !scratchArea)
      return;


    const drawScratchSurface = () => {

      const rect =
        scratchArea.getBoundingClientRect();


      const dpr =
        Math.min(
          window.devicePixelRatio || 1,
          2
        );


      canvas.width =
        rect.width * dpr;

      canvas.height =
        rect.height * dpr;


      canvas.style.width =
        `${rect.width}px`;

      canvas.style.height =
        `${rect.height}px`;


      const ctx =
        canvas.getContext("2d", {
          willReadFrequently: true,
        });


      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );


      /* GOLD BASE */

      const gradient =
        ctx.createLinearGradient(
          0,
          0,
          rect.width,
          rect.height
        );


      gradient.addColorStop(
        0,
        "#b9893d"
      );

      gradient.addColorStop(
        0.18,
        "#e7c46f"
      );

      gradient.addColorStop(
        0.38,
        "#c79745"
      );

      gradient.addColorStop(
        0.58,
        "#f0d47f"
      );

      gradient.addColorStop(
        0.78,
        "#c08c3d"
      );

      gradient.addColorStop(
        1,
        "#a8732d"
      );


      ctx.globalCompositeOperation =
        "source-over";


      ctx.fillStyle = gradient;

      ctx.fillRect(
        0,
        0,
        rect.width,
        rect.height
      );


      /* SOFT GOLD SHINE */

      const shine =
        ctx.createLinearGradient(
          0,
          0,
          rect.width,
          0
        );


      shine.addColorStop(
        0,
        "rgba(255,255,255,0)"
      );

      shine.addColorStop(
        0.45,
        "rgba(255,255,255,0.18)"
      );

      shine.addColorStop(
        0.55,
        "rgba(255,255,255,0.35)"
      );

      shine.addColorStop(
        0.65,
        "rgba(255,255,255,0.08)"
      );

      shine.addColorStop(
        1,
        "rgba(255,255,255,0)"
      );


      ctx.fillStyle = shine;

      ctx.fillRect(
        0,
        0,
        rect.width,
        rect.height
      );


      /* BORDER */

      ctx.strokeStyle =
        "rgba(104, 69, 25, 0.65)";

      ctx.lineWidth = 1.2;


      ctx.strokeRect(
        12,
        12,
        rect.width - 24,
        rect.height - 24
      );


      ctx.strokeStyle =
        "rgba(255,255,255,0.45)";


      ctx.strokeRect(
        16,
        16,
        rect.width - 32,
        rect.height - 32
      );


      /* SMALL GOLD TEXT */

      ctx.textAlign = "center";

      ctx.textBaseline =
        "middle";


      ctx.fillStyle =
        "rgba(76, 49, 24, 0.9)";


      ctx.font =
        "600 15px Georgia";


      ctx.fillText(
        "✦  A  BEAUTIFUL  DAY  AWAITS  ✦",
        rect.width / 2,
        rect.height / 2 - 14
      );


      ctx.fillStyle =
        "rgba(91, 61, 34, 0.75)";


      ctx.font =
        "italic 14px Georgia";


      ctx.fillText(
        "Gently scratch to reveal",
        rect.width / 2,
        rect.height / 2 + 18
      );

    };


    drawScratchSurface();


    window.addEventListener(
      "resize",
      drawScratchSurface
    );


    return () => {

      window.removeEventListener(
        "resize",
        drawScratchSurface
      );

    };

  }, [revealed]);

const [isScratching,setIsScratching] = useState(false);

const startScratch = (event) => {

  if (revealed) return;

  setIsScratching(true);

  event.preventDefault();

  isDrawingRef.current = true;

  lastPointRef.current =
    getPointerPosition(event);

  scratch(event);

};
  /* =======================================================
     GET POINTER POSITION
  ======================================================= */

  const getPointerPosition = (
    event
  ) => {

    const canvas =
      canvasRef.current;


    if (!canvas) return null;


    const rect =
      canvas.getBoundingClientRect();


    const point =
      event.touches
        ? event.touches[0]
        : event;


    return {

      x:
        point.clientX -
        rect.left,

      y:
        point.clientY -
        rect.top,

    };

  };


  /* =======================================================
     START SCRATCH
  ======================================================= */



  /* =======================================================
     SCRATCH
  ======================================================= */

  const scratch = (
    event
  ) => {

    if (
      !isDrawingRef.current ||
      revealed
    ) {
      return;
    }


    event.preventDefault();


    const canvas =
      canvasRef.current;


    if (!canvas) return;


    const ctx =
      canvas.getContext(
        "2d",
        {
          willReadFrequently: true,
        }
      );


    const currentPoint =
      getPointerPosition(event);


    if (!currentPoint)
      return;


    const lastPoint =
      lastPointRef.current ||
      currentPoint;


    const dpr =
      Math.min(
        window.devicePixelRatio || 1,
        2
      );


    ctx.save();


    ctx.setTransform(
      dpr,
      0,
      0,
      dpr,
      0,
      0
    );


    ctx.globalCompositeOperation =
      "destination-out";


    ctx.lineCap =
      "round";

    ctx.lineJoin =
      "round";


    /*
       Brush size.
       Smooth modern scratch.
    */

    ctx.lineWidth = 44;


    ctx.beginPath();


    ctx.moveTo(
      lastPoint.x,
      lastPoint.y
    );


    ctx.lineTo(
      currentPoint.x,
      currentPoint.y
    );


    ctx.stroke();


    /*
       Circle gives smooth scratch
       even when pointer moves slowly.
    */

    ctx.beginPath();

    ctx.arc(
      currentPoint.x,
      currentPoint.y,
      22,
      0,
      Math.PI * 2
    );

    ctx.fill();


    ctx.restore();


    lastPointRef.current =
      currentPoint;

  };


  /* =======================================================
     STOP SCRATCH
  ======================================================= */

  const stopScratch = () => {

    if (!isDrawingRef.current)
      return;


    isDrawingRef.current =
      false;

    lastPointRef.current =
      null;


    checkScratchPercentage();

  };


  /* =======================================================
     CHECK SCRATCH PERCENTAGE
  ======================================================= */

  const checkScratchPercentage =
    () => {

      const canvas =
        canvasRef.current;


      if (!canvas || revealed)
        return;


      const ctx =
        canvas.getContext(
          "2d",
          {
            willReadFrequently: true,
          }
        );


      const imageData =
        ctx.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );


      const pixels =
        imageData.data;


      let transparentPixels = 0;

      let totalPixels = 0;


      /*
        Skip some pixels for performance.
      */

      const step = 16;


      for (
        let i = 3;
        i < pixels.length;
        i += 4 * step
      ) {

        totalPixels++;


        if (pixels[i] < 50) {

          transparentPixels++;

        }

      }


      const percentage =
        (transparentPixels /
          totalPixels) *
        100;


      /*
        Reveal after 25%
      */

      if (percentage >= 25) {

        revealWeddingDay();

      }

    };


  /* =======================================================
     REVEAL
  ======================================================= */

  const revealWeddingDay =
    () => {

      if (revealed) return;


      setRevealed(true);


      /*
        Scroll event section slightly
        into view after reveal.
      */

      setTimeout(() => {

        const element =
          document.getElementById(
            "wedding-events"
          );


        if (element) {

          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

        }

      }, 900);

    };


  /* =======================================================
     LOCATION
  ======================================================= */

  const openLocation = (
    url
  ) => {

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );

  };


  /* =======================================================
     RENDER
  ======================================================= */

  return (

    <section
      className="wedding-countdown-section"
      id="wedding-details"
    >

      {/* ===============================================
          MINIMAL CORNER FLOWERS
      =============================================== */}

      {/* =================================================
    FOUR CORNER FLOWERS
================================================= */}

      <div className="countdown-corner-flower flower-top-left">
        <img src={flower} alt="" />
      </div>

      <div className="countdown-corner-flower flower-top-right">
        <img src={flower} alt="" />
      </div>

      <div className="countdown-corner-flower flower-bottom-left">
        <img src={flower} alt="" />
      </div>

      <div className="countdown-corner-flower flower-bottom-right">
        <img src={flower} alt="" />
      </div>


      {/* ===============================================
          TOP COUNTDOWN AREA
      =============================================== */}

      <div className="wedding-countdown-container">


        {/* ORNAMENT */}

        <div className="countdown-top-ornament">

          <span />

          <strong>
            <img src={borderLine} />
          </strong>

          <span />

        </div>


        {/* EYEBROW */}

        <p className="countdown-eyebrow">
          SAVE THE DATE
        </p>


        {/* TITLE */}

        <h2 className="countdown-title">
          Our Wedding Day
        </h2>


        {/* SUBTITLE */}

        <p className="countdown-subtitle">
          A beautiful beginning awaits.
        </p>


        {/* ===========================================
            SCRATCH CARD
        =========================================== */}

        <div
          ref={scratchAreaRef}
          className={`
            wedding-scratch-card
            ${revealed
              ? "scratch-card-revealed"
              : ""
            }
          `}
        >

          {/* DATE UNDER SCRATCH LAYER */}

          <div className="scratch-date-content">

            <span className="scratch-date-eyebrow">
              THE DAY WE SAY
            </span>


            <div className="scratch-date-main">

              <strong>
                17
              </strong>


              <div className="scratch-date-divider" />


              <div className="scratch-month-year">

                <span>
                  SEPTEMBER
                </span>

                <small>
                  2026
                </small>

              </div>

            </div>


            <div className="scratch-date-bottom">

              <span />

              <strong>
                ❦
              </strong>

              <span />

            </div>

          </div>


          {/* SCRATCH CANVAS */}

          {!revealed && (

            <canvas
              ref={canvasRef}
              className="scratch-canvas"

              onMouseDown={
                startScratch
              }

              onMouseMove={
                scratch
              }

              onMouseUp={
                stopScratch
              }

              onMouseLeave={
                stopScratch
              }

              onTouchStart={
                startScratch
              }

              onTouchMove={
                scratch
              }

              onTouchEnd={
                stopScratch
              }
            />

          )}

        </div>


        {/* ===========================================
            SCRATCH MESSAGE
        =========================================== */}

        {!revealed ? (
<>
{ !isScratching && (
  <div className="scratch-hand-overlay">
     <img src={hand} alt="" />
  </div>
)}

          <div className="scratch-instruction">

            <span className="scratch-hand">
              ☝
            </span>

            <p>
              Scratch gently to reveal
              our special day
            </p>

          </div>
</>


        ) : (

          <div className="scratch-revealed-message">

            <span>
              ✦
            </span>

            <p>
              Mark the day,
              share the joy
            </p>

            <span>
              ✦
            </span>

          </div>

        )}


        {/* ===========================================
            IMPORTANT:
            COUNTDOWN ONLY AFTER SCRATCH
        =========================================== */}

        {revealed && (

          <div className="countdown-after-reveal">


            {/* LABEL */}

            <div className="countdown-wrapper">

              <div className="countdown-label">

                {/* <span />

                <p>
                  Until our forever begins
                </p>

                <span /> */}

              </div>


              {/* TIMER */}

              <div className="countdown-grid">


                <CountdownBox
                  value={formatNumber(
                    timeLeft.days
                  )}
                  label="DAYS"
                />


                <div className="countdown-separator">
                  :
                </div>


                <CountdownBox
                  value={formatNumber(
                    timeLeft.hours
                  )}
                  label="HOURS"
                />


                <div className="countdown-separator">
                  :
                </div>


                <CountdownBox
                  value={formatNumber(
                    timeLeft.minutes
                  )}
                  label="MINUTES"
                />


                <div className="countdown-separator">
                  :
                </div>


                <CountdownBox
                  value={formatNumber(
                    timeLeft.seconds
                  )}
                  label="SECONDS"
                />


              </div>

            </div>


            {/* BOTTOM MESSAGE */}

            <div className="countdown-bottom d-flex">

              <img src={half_line} className="half_line" />
              <p>
                See you on our special day
              </p>
              <img src={half_line} className="half_line" />
            </div>


          </div>

        )}

      </div>


      {/* =================================================
          EVENTS
          THIS ALSO OPENS ONLY AFTER SCRATCH
      ================================================= */}

      {revealed && (

        <div
          className="wedding-events-reveal"
          id="wedding-events"
        >

          <div className="events-container">


            {/* =========================================
                EVENTS HEADING
            ========================================= */}

            <div className="events-heading">

              <p>
                ✦ CELEBRATE WITH US ✦
              </p>

              <h3>
                Two Moments,
                One Forever
              </h3>

              <div className="events-heading-line">

                <span />

                <strong>
                  <img src={borderLine} />

                </strong>

                <span />

              </div>

            </div>


            {/* =========================================
                EVENT CARDS
            ========================================= */}

            <div className="events-grid">


              {/* =====================================
                  RECEPTION
              ===================================== */}

              <article
                className="
                  wedding-event-card
                  reception-card
                "
              >

                <div className="event-icon">
                  <img src={glass} className="temple-new"></img>

                </div>


                <p className="event-type">
                  ✦ RECEPTION ✦
                </p>


                <h4>
                  September 16, 2026
                </h4>


                <div className="event-small-line">
                  <span />
                  <strong>✦</strong>
                  <span />
                </div>


                <div className="event-info-row">

                  <span className="event-info-icon">
                    ◷
                  </span>

                  <p>
                    5:00 PM – 9:00 PM
                  </p>

                </div>


                <div className="event-location">

                  <div className="location-title">

                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 21C12 21 19 14.5 19 9C19 5.134 15.866 2 12 2C8.134 2 5 5.134 5 9C5 14.5 12 21 12 21Z"
                          stroke="#B58A32"
                          fill="#B58A32"
                          stroke-width="1.4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <circle
                          cx="12"
                          cy="9"
                          r="2.4"
                          stroke="#ffffff"
                          fill="#fff"
                          stroke-width="1.5"
                        />
                      </svg>
                    </span>

                    <strong>
                      Lakshmi Hall
                    </strong>

                  </div>

                  <p>
                    Kolathur Bus stand,
                    Mettur
                  </p>

                </div>


                <div className="event-divider" />


                <p className="event-description">
                  An evening of love,
                  laughter
                  <br />
                  & celebration.
                </p>


                <button
                  type="button"
                  className="event-location-btn"
                  onClick={() =>
                    openLocation(
                      "https://www.google.com/maps/place/LAKSHMI+THIRUMANA+MANDABAM/@11.8463563,77.7469119,17z/data=!3m1!4b1!4m6!3m5!1s0x3baeadff2d020987:0x5a9f1b3e1ed15afa!8m2!3d11.8463563!4d77.7494868!16s%2Fg%2F11gxmhhv_p!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D"
                    )
                  }
                >

                  <span className="map-icon">
                                        <img src={location} className="location-img"/>
                  </span>

                  <span>
                    VIEW LOCATION
                  </span>

                  <strong>
                    →
                  </strong>

                </button>

              </article>


              {/* =====================================
                  CENTER ORNAMENT
              ===================================== */}

              <div className="events-center-ornament">

                <div className="center-decoration">
                  <img src={divider} />
                </div>

                <strong>
                  ♥
                </strong>

              </div>


              {/* =====================================
                  WEDDING
              ===================================== */}

              <article
                className="
                  wedding-event-card
                  marriage-card
                "
              >
                <div className="event-icon">
                  <img src={temple} className="temple-new"></img>
                </div>


                <p className="event-type">
                  ✦ WEDDING CEREMONY ✦
                </p>


                <h4>
                  September 17, 2026
                </h4>


                <div className="event-small-line">

                  <span />

                  <strong>
                    ✦
                  </strong>

                  <span />

                </div>


                <div className="event-info-row">

                  <span className="event-info-icon">
                    ◷
                  </span>

                  <p>
                    4:00 AM – 5:00 AM
                  </p>

                </div>


                <div className="event-location">

                  <div className="location-title">

                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 21C12 21 19 14.5 19 9C19 5.134 15.866 2 12 2C8.134 2 5 5.134 5 9C5 14.5 12 21 12 21Z"
                          stroke="#B58A32"
                          fill="#B58A32"
                          stroke-width="1.4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <circle
                          cx="12"
                          cy="9"
                          r="2.4"
                          stroke="#ffffff"
                          fill="#fff"
                          stroke-width="1.5"
                        />
                      </svg>
                    </span>

                    <strong>
                      Sivan Temple
                    </strong>

                  </div>

                  <p>
                    Nelleeswarar Temple, Mettur
                  </p>

                </div>


                <div className="event-divider" />


                <p className="event-description">
                  With divine blessings,
                  <br />
                  we begin our forever.
                </p>


                <button
                  type="button"
                  className="event-location-btn"
                  onClick={() =>
                    openLocation(
                      "https://www.google.com/maps/place/Nelleeswarar+Temple/@11.8071993,77.7721944,17z/data=!3m1!4b1!4m6!3m5!1s0x3baead34ea6fd49f:0xbfd345049517490e!8m2!3d11.8071993!4d77.7721944!16s%2Fg%2F11c7t0v9sp!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D"
                    )
                  }
                >

                  <span className="map-icon">
                    <img src={location} className="location-img"/>
                  </span>

                  <span>
                    VIEW LOCATION
                  </span>

                  <strong>
                    →
                  </strong>

                </button>

              </article>

            </div>


            {/* =========================================
                EVENTS FOOTER
            ========================================= */}

            <div className="events-footer">

              <span />

              <p>
                ❦ We await your
                presence ❦
              </p>

              <span />

            </div>


          </div>

        </div>

      )}


    </section>


  );
}