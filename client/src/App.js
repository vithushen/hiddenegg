import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import TerminusMap from './pages/TerminusMap'
import LibertyFallsMap from './pages/LibertyFallsMap'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/terminus" element={<TerminusMap/>} />
        <Route path="/liberty-falls" element={<LibertyFallsMap/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
