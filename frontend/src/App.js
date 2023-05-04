import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Movies from './pages/Movies';
import MoviesAdmin from './pages/admin/MoviesAdmin';

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/admin" element={<MoviesAdmin />} />
          </Routes>
        </MainLayout>
      </BrowserRouter></>

  );
}

export default App;
