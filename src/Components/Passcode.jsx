import { useRef, useState } from "react";
import "./Passcode.css";

const CORRECT_PASSCODE = "1110";

const KEYS = [
  "1", "2", "3",
  "4", "5", "6",
  "7", "8", "9",
  "clear", "0", "delete",
];

export default function Passcode({ onUnlock, onBack }) {
  const [digits, setDigits] = useState(["", "", "", ""]);
  const [error, setError] = useState(false);
  const [reaction, setReaction] = useState(false);

  const inputRefs = useRef([]);

  const resetError = () => {
    setError(false);
    setReaction(false);
  };

  const focusFirstInput = () => {
    requestAnimationFrame(() => {
      inputRefs.current[0]?.focus();
    });
  };

  const handleReenter = () => {
    setDigits(["", "", "", ""]);
    resetError();
    focusFirstInput();
  };

  const updateDigit = (index, value) => {
    const digit = value.replace(/\D/g, "").slice(-1);

    resetError();

    const updated = [...digits];
    updated[index] = digit;
    setDigits(updated);

    if (digit && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleNumber = (key) => {
    resetError();

    if (key === "clear") {
      setDigits(["", "", "", ""]);
      focusFirstInput();
      return;
    }

    if (key === "delete") {
      let lastFilled = -1;

      for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] !== "") {
          lastFilled = i;
          break;
        }
      }

      if (lastFilled !== -1) {
        const updated = [...digits];
        updated[lastFilled] = "";
        setDigits(updated);
        inputRefs.current[lastFilled]?.focus();
      }

      return;
    }

    const emptyIndex = digits.findIndex((digit) => digit === "");

    if (emptyIndex !== -1) {
      updateDigit(emptyIndex, key);
    }
  };

  const handleSubmit = () => {
    const passcode = digits.join("");

    if (passcode.length !== 4 || passcode !== CORRECT_PASSCODE) {
      setError(true);
      setReaction(true);
      setDigits(["", "", "", ""]);
      focusFirstInput();
      return;
    }

    resetError();
    onUnlock?.();
  };

  const handleKeyDown = (index, event) => {
    if (
      event.key === "Backspace" &&
      digits[index] === "" &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === "Enter") {
      handleSubmit();
    }

    if (event.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === "ArrowRight" && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <main className="passcode-page">
      {/* Background decorations */}
      <span className="decor decor-one">♡</span>
      <span className="decor decor-two">✦</span>
      <span className="decor decor-three">✧</span>
      <span className="decor decor-four">♡</span>
      <span className="decor decor-five">✦</span>

      <section className="passcode-layout">
        {/* LEFT SIDE: BIRTHDAY IMAGE */}
        <div
          className={`birthday-art ${
            reaction ? "wrong-passcode-mode" : ""
          }`}
        >
          {/* Funky heading */}
          <div className="funky-greeting">
            <span className="greeting-star">✦</span>

            <span className="greeting-text">
              {reaction ? "OOPSIE! WRONG CODE!" : "HI NAVIYA!"}
            </span>

            <span className="greeting-star">✦</span>
          </div>

          {/* Change image when passcode is wrong */}
          <img
            key={reaction ? "wrong" : "welcome"}
            src={
              reaction
                ? "/assets/wrongpasscode.png"
                : "/assets/welcome.png"
            }
            alt={
              reaction
                ? "Angry Pikachu"
                : "Birthday surprise for Naviya"
            }
            className="welcome-image"
          />

          {/* Text below image */}
          <div className="art-caption">
            {reaction ? (
              <>
                <p className="funny-title">
                  OI DETECTIVE! 😂
                </p>

                <p className="funny-caption">
                  Pikachu is NOT impressed! ⚡
                </p>

                <p className="small-caption">
                  Correct code sollu, illana shock dhaan! 🤣
                </p>
              </>
            ) : (
              <>
                <p>
                  A little surprise
                  <br />
                  made just for you <span className="caption-heart">♥</span>
                </p>
              </>
            )}
          </div>
        </div>

        {/* RIGHT SIDE: PASSCODE PANEL */}
        <div className="lock-panel">
          <div className="lock-icon">🔐</div>

          <h1>Enter a passcode</h1>

          <p className="lock-description">
            Only someone special knows the secret!
          </p>

          <div className="tiny-divider">
            <span />
            <span className="divider-heart">♥</span>
            <span />
          </div>

          {/* Four separate digit inputs */}
          <div className="passcode-slots">
            {digits.map((digit, index) => (
              <input
                key={index}
                ref={(element) => {
                  inputRefs.current[index] = element;
                }}
                type="password"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                value={digit}
                className={`passcode-slot ${
                  digit ? "filled" : ""
                }`}
                aria-label={`Passcode digit ${index + 1}`}
                autoComplete="off"
                onChange={(event) =>
                  updateDigit(index, event.target.value)
                }
                onKeyDown={(event) =>
                  handleKeyDown(index, event)
                }
                onFocus={(event) => event.target.select()}
              />
            ))}
          </div>

          {/* Number keypad */}
          <div className="keypad">
            {KEYS.map((key, index) => (
              <button
                key={`${key}-${index}`}
                type="button"
                className={`keypad-button ${
                  key === "clear" || key === "delete"
                    ? "utility-key"
                    : ""
                }`}
                onClick={() => handleNumber(key)}
                aria-label={
                  key === "clear"
                    ? "Clear all digits"
                    : key === "delete"
                    ? "Delete last digit"
                    : key
                }
              >
                {key === "clear"
                  ? "C"
                  : key === "delete"
                  ? "⌫"
                  : key}
              </button>
            ))}
          </div>

          {/* Wrong passcode message */}
          {error && (
            <div className="pikachu-reaction">
              <p className="reaction-title">
                PIKAAA-CHUUU!! 😂
              </p>

              <span>
                Wrong password, detective!
                <br />
                Try again, bestie! 💛
              </span>
            </div>
          )}

          {!error && (
            <p className="passcode-hint">
              A tiny secret for someone special 💌
            </p>
          )}

          {/* Action buttons */}
          <div className="passcode-actions">
            <button
              type="button"
              className="back-button"
              onClick={() => {
                handleReenter();
                onBack?.();
              }}
            >
              ← Back
            </button>

            <button
              type="button"
              className="reenter-button"
              onClick={handleReenter}
            >
              ↻ Re-enter
            </button>

            <button
              type="button"
              className="submit-button"
              onClick={handleSubmit}
            >
              Unlock <span>♥</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}