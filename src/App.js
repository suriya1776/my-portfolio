import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';
import Resume from './pages/Resume';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
