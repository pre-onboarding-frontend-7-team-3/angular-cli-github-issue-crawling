import "./App.css";
import Header from "./components/common/Header";
import { Routes, Route } from "react-router-dom";
import List from "./pages/List";
import IssueContextWrapper from "./context/issueContext";
import { Detail } from "./pages/Detail";
function App() {
  return (
    <div className="App">
      <Header />
      <IssueContextWrapper>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </IssueContextWrapper>
    </div>
  );
}

export default App;
