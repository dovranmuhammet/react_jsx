// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//Create a react component
const App = () => {
  const labelText = "Enter name:";
  const buttonText = "Submit";
  const someParagraph = "Hey, would you like update your data ?";
  const styleH4 = { backgroundColor: "lightsmoke", color: "#666" };
  //const style = { backgroundColor: "red", color: "white" };

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "green", color: "white" }}>
        {buttonText}
      </button>
      <h4 style={styleH4}>{someParagraph}</h4>
    </div>
  );
};
// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
