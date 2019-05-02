import React from "react";
// Imnports a css file to style thew jumbotron
import "./style.css";
// Function to make a jumbotron on the web page
function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}
// Exports
export default Jumbotron;
