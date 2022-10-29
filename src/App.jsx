import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import IssueList from "./pages/issueList/IssueList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<IssueList />} />
        {/* <Route path="/:id" element={<IssueDetail />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
