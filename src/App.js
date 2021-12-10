import { useState } from "react";
import "./App.scss";
import Osc1 from "./components/Osc1";
import Filter from "./components/Filter";

import React from "react";

let actx = new AudioContext();
let out = actx.destination;
let osc1 = actx.createOscillator();
let gain1 = actx.createGain();
let filter = actx.createBiquadFilter();

osc1.connect(gain1);
gain1.connect(filter);
filter.connect(out);

function App() {
  const [osc1Settings, setOsc1Settings] = useState({
    frequency: osc1.frequency.value,
    detune: osc1.detune.value,
    type: osc1.type,
  });

  const [filterSettings, setFilterSettings] = useState({
    frequency: filter.frequency.value,
    detune: filter.detune.value,
    Q: filter.Q.value,
    gain: filter.gain.value,
    type: filter.type,
  });

  const changeOsc1 = (e) => {
    let { value, id } = e.target;
    setOsc1Settings({ ...osc1Settings, [id]: value });
    osc1[id].value = value;
  };

  const changeOsc1Type = (e) => {
    let { id } = e.target;
    osc1.type = id;
    setOsc1Settings({ ...osc1Settings, type: id });
  };

  const changeFilter = (e) => {
    let { value, id } = e.target;
    setFilterSettings({
      ...filterSettings,
      [id]: value,
    });
    filter[id].value = value;
  };

  const changeFilterType = (e) => {
    let { id } = e.target;
    filter.type = id;
    setFilterSettings({ ...filterSettings, type: id });
  };

  return (
    <div className="App">
      <div className="center">
        <h1>Sliders</h1>
        <button onClick={() => osc1.start()}>start</button>
        <button onClick={() => osc1.stop()}>stop</button>
      </div>
      <Osc1
        settings={osc1Settings}
        change={changeOsc1}
        changeType={changeOsc1Type}
      />
      <Filter
        settings={filterSettings}
        change={changeFilter}
        changeType={changeFilterType}
      />
    </div>
  );
}

export default App;
