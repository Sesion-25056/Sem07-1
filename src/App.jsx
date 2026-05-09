import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />            
            {/* ... resto de rutas */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;