import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import IssuesContextWrapper from "store/IssuesContext";

import Loading from "components/common/Loading";

import IssueListPage from "pages/IssueList";
const IssueDetail = lazy(() => import("pages/IssueDetail"));

const RouteComponent = () => {
  return (
    <IssuesContextWrapper>
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
    </IssuesContextWrapper>
  );
};

export default RouteComponent;
