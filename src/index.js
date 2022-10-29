import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Router";
import { IssuesProvider } from "./context/issuesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IssuesProvider>
    <App />
  </IssuesProvider>,
);