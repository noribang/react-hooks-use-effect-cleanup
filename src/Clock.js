import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    /* Pass to cleanup function. */
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    /* Return cleanup function. */
    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
