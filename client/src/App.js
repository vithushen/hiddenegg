import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
