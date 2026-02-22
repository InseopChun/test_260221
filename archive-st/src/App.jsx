import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import BrandList from './pages/BrandList';
import BrandPage from './pages/BrandPage';
import LookbookSlider from './pages/LookbookSlider';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<BrandList />} />
        <Route path="/brand/:id" element={<BrandPage />} />
        <Route path="/brand/:id/:year" element={<LookbookSlider />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased overflow-x-hidden">
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
