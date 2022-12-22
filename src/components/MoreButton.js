import React from "react";

function MoreButton({ onMoreClick }) {
  function handleMoreClick() {
    onMoreClick()
  }

  return (
  <button onClick={handleMoreClick}>More sushi!</button>
  )
}

export default MoreButton;
