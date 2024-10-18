import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);
  function handleClick() {
    setHeadingText("Submitted");
  }

  // function MouseOver(event) {
  //   event.target.style.background = "black";
  // }
  // function MouseOut(event) {
  //   event.target.style.background = "white";
  // }

  function onMouseOverHandle() {
    // style = { backgroundColor: "black" };
    setMouseOver(true);
  }

  function onMouseOutHandle() {
    // style = { backgroundColor: "black" };
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={onMouseOverHandle}
        onMouseOut={onMouseOutHandle}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
