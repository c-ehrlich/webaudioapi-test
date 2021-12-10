import React, { useContext } from "react";
import { CTX } from "../context/Store";

const ADSR = () => {
  const [appState, updateState] = useContext(CTX);
  let { attack, decay, sustain, release } = appState.envelope;

  const change = (e) => {
    let { id, value } = e.target;
    updateState({ type: "CHANGE_ADSR", payload: { id, value } });
  };

  return (
    <div className="control">
      <h2>ADSR</h2>
      <div className="param">
        <h3>attack</h3>
        <input
          type="range"
          id="attack"
          value={attack}
          onChange={change}
          max="2"
          step="0.02"
        />
        <h3>decay</h3>
        <input
          type="range"
          id="decay"
          value={decay}
          onChange={change}
          max="1"
          step="0.01"
        />
        <h3>sustain</h3>
        <input
          type="range"
          id="sustain"
          value={sustain}
          onChange={change}
          max="1"
          step="0.01"
        />
        <h3>release</h3>
        <input
          type="range"
          id="release"
          value={release}
          onChange={change}
          max="2"
          step="0.02"
        />
      </div>
    </div>
  );
};

export default ADSR;
