import React, { useState, useEffect } from 'react';
import "../WatchFolder/DigitalClock.css"
const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Format time to display with leading zeros and AM/PM indicator
  let formattedHours = hours % 12 || 12; // Convert to 12-hour format
  const amPm = hours >= 12 ? 'PM' : 'AM';
  const formattedTime = `${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${amPm}`;

  return (
    <>
      <div className="digitalClock">{formattedTime}</div>
    </>
  );
};

export default DigitalClock;
