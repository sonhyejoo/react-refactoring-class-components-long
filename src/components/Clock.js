import React, {useState, useEffect} from "react";

export function ClockToggle({ toggleClock }) {
  return (
    <button type="button" className="clock-toggle" onClick={toggleClock}>
      Toggle Clock
    </button>
  );
}

function Clock (props) {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    setTime(new Date())
    let interval = setInterval(time, 1000)
    return (
      console.log('Clearing Clock interval!')
      clearInterval(interval)
    )
  }, [])

  componentWillUnmount() {
    console.log("Clearing Clock interval!");
    clearInterval(this.interval);
  }

  tick = () => {
    setTime(new Date());
  };

  render() {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    const timezone = this.state.time
      .toTimeString() // Form: "14:39:07 GMT-0600 (PDT)"
      .replace(/[^A-Z]/g, "") // Strip out all but capitals
      .slice(3); // Eliminate initial GMT

    return (
      <section className="clock-section">
        <h1>Clock</h1>
        <div className="clock">
          <p className="time">
            <span>Time:</span>
            <span>{`${hours}:${minutes}:${seconds} ${timezone}`}</span>
          </p>
          <p className="date">
            <span>Date:</span>
            <span>{this.state.time.toDateString()}</span>
          </p>
        </div>
      </section>
    );
  }
}

export default Clock;
