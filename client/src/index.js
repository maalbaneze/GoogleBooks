/* Import React and React-dom */
import React from "react";
import ReactDOM from "react-dom";
/* Inmport our App file with our App function */
import App from "./App";
/* Import the file that contains the function to allow user to access local cache */
import registerServiceWorker from "./registerServiceWorker";

/* React-dom renders our page via executing the App function to the root page */
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
