import { Home, Demo } from './routes';
import { Navbar } from './components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Navbar />  
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
