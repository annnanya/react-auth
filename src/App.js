import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './landing';
import GithubLogin from './pages/githublogin';
import GoogleAuthLogin from './pages/googlelogin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/googlelogin" element={<GoogleAuthLogin />}></Route>
          <Route path="/githublogin" element={<GithubLogin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
