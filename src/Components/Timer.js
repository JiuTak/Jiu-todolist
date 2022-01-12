import React, { useEffect, useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => clearTimeout(startTimer);
  });

  return (
    <div>
      <p>You have been here {timer} seconds on this page.</p>
    </div>
  );
}

export default Timer;
