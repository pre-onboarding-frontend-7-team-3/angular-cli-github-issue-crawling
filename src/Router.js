import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import IssueList from "./pages/issueList/IssueList";
import IssueDetail from "./pages/issueDetail/IssueDetail";
import ErrorPage from "./pages/errorPage/ErrorPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IssueList />} />
        <Route path="/:id" element={<IssueDetail />} />
        <Route path="/error-page" element={<ErrorPage />} />
        <Route path="/page-not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="page-not-found" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
