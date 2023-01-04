import { useEffect, useState } from "react";

import "./Events.css";
import image from "../../assets/images/events.png";

const Events = () => {
  const [time, setTime] = useState(323049);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const updateTime = (updatedTime) => {
    const newDays = Math.floor(updatedTime / (24 * 60 * 60));
    if (days !== newDays) setDays((oldDays) => newDays);
    updatedTime %= 24 * 60 * 60;

    const newHours = Math.floor(updatedTime / (60 * 60));
    if (hours !== newHours) setHours((oldHours) => newHours);
    updatedTime %= 60 * 60;

    const newMinutes = Math.floor(updatedTime / 60);
    if (minutes !== newMinutes) setMinutes((oldMinutes) => newMinutes);
    updatedTime %= 60;

    setSeconds(updatedTime);
  };

  useEffect(() => {
    updateTime(time);
    setInterval(() => {
      setTime((oldTime) => oldTime - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    updateTime(time);
  }, [time]);

  return (
    <div className="events" id="events">
      <div className="dots dots-up"></div>
      <div className="dots dots-down"></div>
      <h2 className="main-title">Latest Events</h2>
      <div className="container">
        <img src={image} alt="" />
        <div className="info">
          <div className="time">
            <div className="unit">
              <span>{days}</span>
              <span>Days</span>
            </div>
            <div className="unit">
              <span>{hours}</span>
              <span>Hours</span>
            </div>
            <div className="unit">
              <span>{minutes}</span>
              <span>Minutes</span>
            </div>
            <div className="unit">
              <span>{seconds}</span>
              <span>Seconds</span>
            </div>
          </div>
          <h3>Tech Masters Event 2021</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
            tenetur doloremque iusto ut adipisci quam ratione aliquam excepturi
            nulla in harum, veritatis porro
          </p>
        </div>
        <div className="subscribe">
          <form action="">
            <input type="email" placeholder="Type Your Email" />
            <input
              type="submit"
              value="Subscribe"
              onClick={(e) => e.preventDefault()}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Events;
