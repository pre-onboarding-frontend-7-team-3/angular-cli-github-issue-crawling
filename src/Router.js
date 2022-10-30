import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import IssueList from "./pages/IssueList";
import IssueDetail from "./pages/IssueDetail";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";
import {ROUTES} from './constants/Routes'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.MAIN} element={<IssueList />} />
        <Route path={ROUTES.DETAIL} element={<IssueDetail />} />
        <Route path={ROUTES.ERROR} element={<ErrorPage />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to={ROUTES.NOT_FOUND} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
