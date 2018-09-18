import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/app";
import registerServiceWorker from "./registerServiceWorker";

//css imports
// import "../src/components/css/topbar.css";
import "../src/components/css/float-grid.css";
import "../src/components/css/aboutpg.css";
import "../src/components/css/sign-up.css";
import "../src/components/css/nav-bar.css";
import "../src/components/css/post-list.css";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
