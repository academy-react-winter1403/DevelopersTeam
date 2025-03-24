import React, { useState, useEffect } from "react";

const CountdownTimer = ({ initialTime, onExpire }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft === 0) {
      onExpire(); // Trigger the onExpire callback when the timer reaches zero
      return;
    }

    // Update the timer every second
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Clean up the interval when the component unmounts or the timer expires
    return () => clearInterval(timer);
  }, [timeLeft, onExpire]);

  // Format the time into minutes and seconds
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="text-lg font-semibold">
      <span>{formatTime(timeLeft)}</span>
    </div>
  );
};

export default CountdownTimer;