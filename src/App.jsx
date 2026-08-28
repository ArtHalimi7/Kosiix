import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Loader from './components/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <main className={`bg-[#050507] min-h-screen ${loading ? 'is-loading' : 'is-loaded'}`}>
      {loading && <Loader onLoaded={() => setLoading(false)} />}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
