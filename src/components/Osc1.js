import React from "react";

const Osc1 = ({ settings, change, changeType }) => {
  let { type, frequency, detune } = settings;

  return (
    <div className="control">
      <h2>Oscillator 1</h2>
      <div className="param">
        <h3>frequency</h3>
        <input
          type="range"
          id="frequency"
          onChange={change}
          value={frequency}
          max="5000"
        />
      </div>
      <div className="param">
        <h3>detune</h3>
        <input
          type="range"
          id="detune"
          onChange={change}
          value={detune}
          min="-100"
          max="100"
        />
      </div>
      <div className="param">
        <h3>wave</h3>
        <button
          id="sine"
          onClick={changeType}
          className={`${type === "sine" && "active"}`}
        >
          sine
        </button>
        <button
          id="triangle"
          onClick={changeType}
          className={`${type === "triangle" && "active"}`}
        >
          triangle
        </button>
        <button
          id="square"
          onClick={changeType}
          className={`${type === "square" && "active"}`}
        >
          square
        </button>
        <button
          id="sawtooth"
          onClick={changeType}
          className={`${type === "sawtooth" && "active"}`}
        >
          sawtooth
        </button>
      </div>
    </div>
  );
};

export default Osc1;
