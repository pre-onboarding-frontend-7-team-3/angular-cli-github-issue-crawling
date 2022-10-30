import React from "react";
import { BrowserRouter } from "react-router-dom";

import RouteComponent from "routes";

import Header from "components/common/Header";

function App() {
  return (
    <BrowserRouter>
      <main>
        <header>
          <Header />
        </header>

        <RouteComponent />
      </main>
    </BrowserRouter>
  );
}

export default App;
