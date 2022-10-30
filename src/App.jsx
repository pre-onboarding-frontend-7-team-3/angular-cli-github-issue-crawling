import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IssueProvider } from "./contexts/issueContext";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  return (
    <IssueProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </IssueProvider>
  );
}

export default App;
