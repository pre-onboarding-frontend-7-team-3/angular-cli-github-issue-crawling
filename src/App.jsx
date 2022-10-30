import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IssueProvider } from "./contexts/issueContext";
import Header from "./components/Header";
import Main from "./pages/Main";
import Detail from "./pages/Detail";

function App() {
  return (
    <IssueProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </IssueProvider>
  );
}

export default App;
