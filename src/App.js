import "./App.scss";
import Osc1 from "./components/Osc1";
import Filter from "./components/Filter";
import ADSR from "./components/ADSR";

import React from "react";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <div className="App">
      <h1 className="center">Sliders</h1>
      <Osc1 />
      <ADSR />
      <Filter />
      <Keyboard />
    </div>
  );
}

export default App;
