
import { useState } from "react";
import "./Scrapbook.css";

const memories = [
  {
    image: "/assets/image1.jpeg",
    caption: "Our silly moments 😂",
    note: "Normal ah iruka namalaala mudiyadhu!",
    color: "pink",
  },
  {
    image: "/assets/image2.jpeg",
    caption: "My favourite human 💛",
    note: "Some people make every day better.",
    color: "yellow",
  },
  {
    image: "/assets/image3.jpeg",
    caption: "Certified troublemakers 😈",
    note: "Together, we are a different level!",
    color: "purple",
  },
  {
    image: "/assets/image4.jpeg",
    caption: "Missing these days 🥹",
    note: "Wish we could replay these moments.",
    color: "blue",
  },
  {
    image: "/assets/image5.jpeg",
    caption: "Our crazy friendship ⚡",
    note: "Konjam love, neraya torture!",
    color: "peach",
  },
  {
    image: "/assets/image6.jpeg",
    caption: "More memories to come 💕",
    note: "Our story is nowhere near over.",
    color: "green",
  },
];

const quotes = [
  {
    emoji: "🥰",
    title: "HAPPY DAYS",
    text: "Life is so much more beautiful when you have someone who makes you laugh for absolutely no reason.",
    style: "happy",
  },
  {
    emoji: "🥹",
    title: "MISSING YOU",
    text: "Sometimes, I don't miss a place or a day. I just miss the person who made those moments special.",
    style: "missing",
  },
  {
    emoji: "😂",
    title: "FRIENDSHIP CHAOS",
    text: "You're my unpaid therapist, professional irritator and permanent headache. But you're my favourite one!",
    style: "funny",
  },
];

export default function Scrapbook() {
  const [openedQuote, setOpenedQuote] = useState(null);

  return (
    <main className="scrapbook-page">
      {/* Floating decorations */}
      <div className="scrap-floats" aria-hidden="true">
        <span>♡</span>
        <span>✦</span>
        <span>⚡</span>
        <span>♡</span>
        <span>✧</span>
        <span>💛</span>
        <span>✦</span>
        <span>♡</span>
      </div>

      {/* Welcome section */}
      <header className="scrap-hero">
        <p className="scrap-eyebrow">
          ✦ A LITTLE WORLD MADE JUST FOR YOU ✦
        </p>

        <h1>
          Welcome to Our
          <span> Crazy Little World!</span>
        </h1>

        <p className="scrap-intro">
          Hey Naviya! 💛
          <br />
          Ready for memories, madness and lots of love?
        </p>

        <div className="pikachu-sticker">
          <span className="sticker-sparkle sparkle-left">✦</span>

          <img
            src="/assets/inside1.png"
            alt="Pikachu"
            className="pikachu-image"
          />

          <span className="sticker-sparkle sparkle-right">⚡</span>
          <span className="sticker-caption">PIKA PIKA!</span>
        </div>

        <p className="hero-message">
          Warning: Too much cuteness and craziness ahead! 😂
        </p>

        <a className="scroll-cue" href="#our-memories">
          LET'S SEE OUR MEMORIES ↓
        </a>
      </header>

      {/* Memory wall */}
      <section className="memory-section" id="our-memories">
        <div className="section-heading">
          <span>📸</span>
          <div>
            <p className="section-kicker">LITTLE MOMENTS, BIG MEMORIES</p>
            <h2>Our Memory Wall</h2>
          </div>
          <span>💕</span>
        </div>

        <p className="section-description">
          Every picture has a story. Every story has a little bit of us.
        </p>

        <div className="polaroid-grid">
          {memories.map((memory, index) => (
            <article
              className={`polaroid polaroid-${memory.color}`}
              key={memory.image}
              style={{ "--card-index": index }}
            >
              <div className="polaroid-photo">
                <img
                  src={memory.image}
                  alt={memory.caption}
                  loading="lazy"
                />
                <span className="photo-heart">♥</span>
              </div>

              <div className="polaroid-caption">
                <h3>{memory.caption}</h3>
                <p>{memory.note}</p>
              </div>

              <span className="polaroid-sticker">✦</span>
            </article>
          ))}
        </div>

        <p className="gallery-note">
          📌 Our memories, our madness, our forever collection. 💛
        </p>
      </section>

      {/* Quotes section */}
      <section className="notes-section">
        <div className="section-heading">
          <span>💌</span>
          <div>
            <p className="section-kicker">THINGS I MAY NOT SAY EVERY DAY</p>
            <h2>Little Notes for You</h2>
          </div>
          <span>💛</span>
        </div>

        <p className="section-description">
          Some sweet, some emotional, some totally unserious. Just like us!
          Tap each note for a little extra love.
        </p>

        <div className="quote-grid">
          {quotes.map((quote, index) => (
            <button
              className={`quote-card quote-${quote.style}`}
              type="button"
              key={quote.title}
              onClick={() =>
                setOpenedQuote(
                  openedQuote === index ? null : index
                )
              }
              aria-expanded={openedQuote === index}
            >
              <span className="quote-tape">✦</span>
              <span className="quote-emoji">{quote.emoji}</span>
              <span className="quote-type">{quote.title}</span>

              <span className="quote-text">
                “{quote.text}”
              </span>

              <span className="quote-tap">
                {openedQuote === index
                  ? "Sending you a big hug! 🫂"
                  : "Tap to open this note ✨"}
              </span>

              {openedQuote === index && (
                <span className="quote-extra">
                  No matter how much I tease you, you will always be
                  someone special to me. Never forget that! 💛
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Personal message */}
      <section className="personal-section">
        <div className="personal-card">
          <span className="personal-heart heart-one">♡</span>
          <span className="personal-heart heart-two">✦</span>

          <p className="section-kicker">
            A LITTLE MESSAGE FROM MY HEART
          </p>

          <h2>For You, Naviya 💌</h2>

          <div className="letter-decoration">💛 ✧ 💛</div>

          {/* Replace this text with your own personal message */}
          <p className="personal-message">
            No matter how many days pass or how busy life gets,
            some memories will always make us smile.
            Thank you for being part of my life, for all the laughs,
            the silly moments, the talks and even the times we miss
            each other.
            <br />
            <br />
            We may have our own journeys, but the memories we made
            will always have a special place in my heart.
            <br />
            <br />
            Stay the same crazy, cute and wonderful person you are.
            You deserve all the happiness in the world! 🥹💛
          </p>

          <p className="letter-signoff">
            Lots of love and endless craziness,
            <br />
            <span>Your favourite troublemaker 💕</span>
          </p>
        </div>
      </section>

      {/* Birthday ending */}
      <footer className="birthday-ending">
        <div className="confetti confetti-one">✦</div>
        <div className="confetti confetti-two">♡</div>
        <div className="confetti confetti-three">✧</div>
        <div className="confetti confetti-four">⚡</div>

        <img
          src="/assets/caketopper.png"
          alt="Pikachu celebrating"
          className="ending-pikachu"
        />

        <p className="ending-kicker">TODAY IS ALL ABOUT YOU</p>

        <h2>
          Happy Birthday,
          <span> pisasu..</span>
        </h2>

        <p className="ending-message">
          Keep smiling, keep shining and keep being your
          wonderfully crazy self! 💛
          <br />
          You deserve a lifetime full of happiness, love and laughter.
        </p>

        <div className="birthday-wishes">
          <span>🎂</span>
          <span>💛</span>
          <span>🎉</span>
          <span>⚡</span>
          <span>💕</span>
        </div>

        <p className="ending-footer">
          Made with love, memories and a little Pikachu magic ⚡
        </p>
      </footer>
    </main>
  );
}
