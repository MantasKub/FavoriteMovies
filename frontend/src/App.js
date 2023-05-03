import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from './pages/Movies';
import MoviesAdmin from './pages/admin/MoviesAdmin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/admin" element={<MoviesAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
