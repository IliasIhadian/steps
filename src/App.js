import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [close, setClose] = useState(false);

  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  return (
    <>
      <button onClick={() => setClose((c) => !c)} className="close">
        &times;
      </button>
      {close ? null : (
        <>
          <div className="steps">
            <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>

            <p className="message">
              Step : {step}: {messages[step - 1]}
            </p>

            <div className="buttons">
              <button
                onClick={handleBack}
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
              >
                Back
              </button>
              <button
                onClick={handleNext}
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
