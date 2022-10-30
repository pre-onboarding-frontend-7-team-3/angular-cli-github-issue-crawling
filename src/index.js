import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { IssuesProvider } from "./context/issuesContext";
import { IssueDetailProvider } from "./context/issueDetailContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IssuesProvider>
    <IssueDetailProvider>
      <Router />
    </IssueDetailProvider>
  </IssuesProvider>,
);
