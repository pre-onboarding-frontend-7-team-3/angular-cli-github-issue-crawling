import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IssueList from './pages/issueList/IssueList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IssueList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;