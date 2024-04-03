import React, { useState, useEffect } from 'react';
import Style from "../WatchFolder/Watch.module.css";
import DigitalClock from './DigitalClock';
import { Link } from 'react-router-dom';

import { IoChevronBackCircle } from "react-icons/io5";
const Watch = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourAngle = (hours % 12) * 30 + minutes / 2;
  const minuteAngle = minutes * 6 + seconds / 10;
  const secondAngle = seconds * 6;

  return (
    <>
    <div className={Style.homePage}>
        <h6><Link to="/"><  IoChevronBackCircle /></Link></h6>
        
     
    </div>
    <div className={Style.clock}>
      <div className={Style.hourHand} style={{ transform: `rotate(${hourAngle}deg)` }} />
      <div className={Style.minuteHand} style={{ transform: `rotate(${minuteAngle}deg)` }} />
      <div className={Style.secondHand} style={{ transform: `rotate(${secondAngle}deg)` }} />
      {[...Array(12).keys()].map((index) => (
        <div
          key={index}
          className={Style.hourMark}
          style={{ transform: `rotate(${index * 30}deg) translate(-50%, 0)` }}
        />
      ))}
    </div>
   <div>
    <DigitalClock/>
   </div>
    </>
  );
};

export default Watch;
