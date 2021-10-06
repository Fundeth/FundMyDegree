import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";

// We import bootstrap here, but you can remove if you want
// import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MoralisProvider
        appId="1a1CW4AUd1l3XJcEcawPyY4pHN27llaJo8tWYS7z"
        serverUrl="https://r8ngt2qrxcrp.bigmoralis.com:2053/server"
      >
        <Provider store={store}>
          <App />
        </Provider>
      </MoralisProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
