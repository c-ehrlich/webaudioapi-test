import { useState } from "react";
import "./App.scss";
import Osc1 from "./components/Osc1";

import React from "react";

let actx = new AudioContext();
let out = actx.destination;
let osc1 = actx.createOscillator();
let gain1 = actx.createGain();

osc1.connect(gain1);
gain1.connect(out);

function App() {
  const [osc1Settings, setOsc1Settings] = useState({
    frequency: osc1.frequency.value, 
    detune: osc1.detune.value,
  })

  const changeOsc1 = (e) => {
    let { value, id } = e.target;
    setOsc1Settings({ ...osc1Settings, [id]: value });
    osc1[id].value = value;
  }

  return (
    <div className="App">
      <h1>sliders</h1>
      <button onClick={() => osc1.start()}>start</button>
      <button onClick={() => osc1.stop()}>stop</button>
      <Osc1
        settings={osc1Settings}
        change={changeOsc1}
      />
    </div>
  );
}

export default App;
