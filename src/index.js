import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./AppComponents/app";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
