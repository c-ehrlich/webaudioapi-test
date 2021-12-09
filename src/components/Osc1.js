import React, { useEffect } from "react";

const Osc1 = ({ freq, changeFreq }) => {
  return (
    <div>
      <input type="range" id="frequency" onChange={changeFreq} value={freq} max="5000" />
    </div>
  );
};

export default Osc1;
