import React, { useContext } from "react";
import { CTX } from "../context/Store";

const Osc1 = () => {
  const [appState, updateState] = useContext(CTX);

  let { type, frequency, detune } = appState.osc1Settings;

  const change = (e) => {
    let { id, value } = e.target;
    updateState({ type: "CHANGE_OSC1", payload: { id, value } });
  };

  const changeType = (e) => {
    let { id } = e.target;
    updateState({ type: "CHANGE_OSC1_TYPE", payload: { id } });
  };

  return (
    <div className="control">
      <h2>Oscillator 1</h2>
      <div>
        <button onClick={() => updateState({ type: "START_OSC" })}>
          start
        </button>
        <button onClick={() => updateState({ type: "STOP_OSC" })}>stop</button>
      </div>
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
