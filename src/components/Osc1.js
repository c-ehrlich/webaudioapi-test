import React from "react";

const Osc1 = ({ settings, change }) => {
  return (
    <div className="control">
      <h2>Oscillator 1</h2>
      <div className="param">
        <h3>frequency</h3>
        <input
          type="range"
          id="frequency"
          onChange={change}
          value={settings.frequency}
          max="5000"
        />
      </div>
      <div className="param">
        <h3>detune</h3>
        <input
          type="range"
          id="detune"
          onChange={change}
          value={settings.detune}
          min="-100"
          max="100"
        />
      </div>
    </div>
  );
};

export default Osc1;
