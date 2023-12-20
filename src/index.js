import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppRouter from "./routes/AppRouter";
import "@kehillahglobal/ui/dist/index.css";
import BubblyBalloonProvider from "./components/bubbly-balloon/bubbly-balloon-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BubblyBalloonProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    </BubblyBalloonProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
