import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import { MoneyProvider } from "../context/Money";

const API = "http://localhost:3001/sushis?_limit=4";

function App() {
  const [plates, setPlates] = useState([])

  function onPlateClick(clickedPlate) {
    setPlates([...plates, clickedPlate])
  }

  return (
    <div className="app">
      <MoneyProvider>
      <SushiContainer onPlateClick={onPlateClick} api={API} />
      <Table plates={plates} />
      </MoneyProvider>
    </div>
  );
}

export default App;
