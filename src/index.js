import React, { useState } from "react";
import ReactDOM from "react-dom";

// write your Color component here
const Color = (props) => {
  return (
    <div
      onClick={() => props.selectColor(props.color)}
      className={props.color}
    />
  );
};
const Picker = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const selectColor = (colorName) => {
    setSelectedColor(colorName);
  };

  const selected = (color) => {
    SetSelected(selected);
  };

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        {
          <>
            <Color color="red" selectColor={selectColor} />
            <Color color="blue" selectColor={selectColor} />
            <Color color="green" selectColor={selectColor} />
          </>
        }
      </div>
    </div>
  );
};

ReactDOM.render(<Picker />, document.getElementById("app"));
