import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login.jsx'
import { FindUserId } from './pages/FindUserId.jsx';
import { FindPassword } from './pages/FindPassword.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/find-user-id" element={<FindUserId />} />
        <Route path="/find-password" element={<FindPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
