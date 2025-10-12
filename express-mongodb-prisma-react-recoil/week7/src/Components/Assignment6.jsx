import React from "react";
import { useRef } from "react";
import { useState } from "react";

const Assignment6 = () => {
  const length = 4;
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const [pending, setPending] = useState(true);
  return (
    <div>
      {pending ? (
        <Form setPending={setPending} />
      ) : (
        <OTP otp={otp} setOtp={setOtp} />
      )}
    </div>
  );
};

function Form({ setPending }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "20px",
      }}
    >
      <h1>Login Via Otp</h1>
      <input
        type="text"
        style={{ padding: "10px", borderRadius: "8px", width: "25%" }}
        placeholder="Enter your mobile number"
      />
      <button
        style={{ padding: "10px", borderRadius: "8px", width: "10%" }}
        onClick={() => {
          setPending(false);
        }}
      >
        Send OTP
      </button>
    </div>
  );
}

function OTP({ otp, setOtp }) {
  const inputRefs = useRef([]);

  function handleChange(e, index) {
    const { value } = e.target;
    if (isNaN(value) || value.length > 1) return;

    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value) {
      inputRefs.current[index + 1].focus();
    }
  }

  function handleKeyDown(e, index) {
    const currentInputValue = e.target.value;
    console.log(currentInputValue);

    if (e.key === "Backspace") {
      // Only move focus back if the current input is empty
      if (currentInputValue === "" && index > 0) {
        inputRefs.current[index - 1]?.focus();
        e.preventDefault(); // Prevent the default backspace behavior (deleting from the new focused input)
      }
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "20px",
      }}
    >
      <h1>Login Via Otp</h1>
      <div style={{ display: "flex" }}>
        {otp.map((digit, index) => {
          return (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              style={{
                width: "30px",
                height: "30px",
                margin: "5px",
                textAlign: "center",
                borderRadius: "4px",
              }}
            />
          );
        })}
      </div>
      <button style={{ padding: "10px", borderRadius: "8px", width: "10%" }}>
        Login
      </button>
    </div>
  );
}
export default Assignment6;
