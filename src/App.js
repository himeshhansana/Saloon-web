import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Footer from './Footer'; // Import the Footer component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content"> {/* Added for proper layout structure */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer /> {/* Footer added here */}
      </div>
    </Router>
  );
}

export default App;