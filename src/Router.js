import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/common/Header";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import IssueList from "./pages/issueList/IssueList";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<IssueList />} />
        {/* <Route path="/:id" element={<IssueDetail />} /> */}
        <Route path="/error-page" element={<ErrorPage />} />
        <Route path="/page-not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="page-not-found" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
