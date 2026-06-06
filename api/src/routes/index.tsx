import React, { useEffect, useState } from "react";

export default function Aviator() {
  const [multiplier, setMultiplier] = useState(1);
  const [crashed, setCrashed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/api/crash")
        .then(res => res.json())
        .then(data => {
          setMultiplier(data.multiplier);
          setCrashed(data.crashed);
        });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: "#0b0f1a",
      color: "white",
      height: "100vh",
      textAlign: "center",
      paddingTop: "70px"
    }}>
      <h1>AVIATOR1000X</h1>

      <h2 style={{ fontSize: "60px" }}>
        {crashed ? "💥 CRASHED" : `x${multiplier}`}
      </h2>

      <button>BET</button>
      <button>CASHOUT</button>
    </div>
  );
        }
