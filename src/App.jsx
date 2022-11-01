import React from "react";
import RouteComponent from "routes";

import IssuesContextWrapper from "store/IssuesContext";

import Header from "components/common/Header";

function App() {
  return (
    <main>
      <IssuesContextWrapper>
        <header>
          <Header />
        </header>

        <RouteComponent />
      </IssuesContextWrapper>
    </main>
  );
}

export default App;
