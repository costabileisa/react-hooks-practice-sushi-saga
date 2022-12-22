import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ api, onPlateClick }) {
  const [sushis, setSushis] = useState([])
  const [page, setPage] = useState(1)

  function onMoreClick() {
    setSushis([])
    setPage(current => current + 1);
  }

  useEffect(() => {
    fetch(`${api}&_page=${page}`)
    .then(res => res.json())
    .then(data => setSushis(data))
  }, [page])

  const listSushis = sushis.map(sushi => {
    return (
      <Sushi key={sushi.id} onPlateClick={onPlateClick} sushi={sushi} />
    )
  })
  return (
    <div className="belt">
      {listSushis}
      <MoreButton onMoreClick={onMoreClick} />
    </div>
  );
}

export default SushiContainer;
