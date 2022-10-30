import "./App.css";
import Header from "./components/common/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import List from "./pages/List";
import IssueContextWrapper from "./context/issueContext";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
function App() {
  return (
    <div className="App">
      <Header />
      <IssueContextWrapper>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/detail/:issue_number" element={<Detail />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Navigate to={"/error"} state={{status:404, message:"Page Not found"}}/>} />
        </Routes>
      </IssueContextWrapper>
    </div>
  );
}

export default App;
