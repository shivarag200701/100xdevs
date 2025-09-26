import React from "react";
import { useState } from "react";

const Assignment2 = () => {
  const [color, setColor] = useState("white");

  return (
    <>
      <div
        style={{ height: "100vh", width: "100vw", backgroundColor: `${color}` }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "10px",
                padding: "20px",
                margin: "20px",
              }}
            >
              <button
                style={{
                  backgroundColor: "red",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
                onClick={() => setColor("red")}
              >
                red
              </button>
              <button
                style={{
                  backgroundColor: "yellow",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
                onClick={() => setColor("yellow")}
              >
                yellow
              </button>
              <button
                style={{
                  backgroundColor: "Black",
                  color: "white",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
                onClick={() => setColor("black")}
              >
                Black
              </button>
              <button
                style={{
                  backgroundColor: "purple",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
                onClick={() => setColor("purple")}
              >
                purple
              </button>
              <button
                style={{
                  backgroundColor: "green",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
                onClick={() => setColor("green")}
              >
                green
              </button>
              <button
                style={{
                  backgroundColor: "blue",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
                onClick={() => setColor("blue")}
              >
                blue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assignment2;
