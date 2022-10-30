import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import IssueList from "./pages/IssueList";
import IssueDetail from "./pages/IssueDetail";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";

function Router() {
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

export default Router;
