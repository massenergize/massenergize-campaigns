import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppRouter from "./routes/AppRouter";
import "@kehillahglobal/ui/dist/index.css";
import BubblyBalloonProvider from "./lib/bubbly-balloon/bubbly-balloon-context";
import ErrorBoundary from "./components/ErrorBoundary";
import { LocaleProvider } from "./contexts/locale-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <LocaleProvider>
      <Provider store={store}>
        <BubblyBalloonProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </BubblyBalloonProvider>
      </Provider>
    </LocaleProvider>
  </ErrorBoundary>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
