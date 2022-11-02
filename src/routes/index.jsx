import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Loading from "components/common/IssueItemSkeleton";

import IssueListPage from "pages/IssueList";
const IssueDetail = lazy(() => import("pages/IssueDetail"));

const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<IssueListPage />} />

      <Route
        path="/:id"
        element={
          <Suspense fallback={<Loading />}>
            <IssueDetail />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default RouteComponent;
