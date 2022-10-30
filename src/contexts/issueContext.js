import React, { createContext, useState, useContext, useMemo } from "react";

export const IssueContext = createContext();

export const IssueProvider = ({ children }) => {
  const [issue, setIssue] = useState([]);
  const value = useMemo(() => [issue, setIssue], [issue]);

  return <IssueContext.Provider value={value}>{children}</IssueContext.Provider>;
};

export const useIssue = () => useContext(IssueContext);
