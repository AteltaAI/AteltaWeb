import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Demo from './Components/Demo/Demo';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  return (
    <BrowserRouter>
    <Navbar />  
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
