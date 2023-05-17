import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Movies from './pages/Movies';
import MoviesAdmin from './pages/admin/MoviesAdmin';
import NewMovie from './pages/admin/NewMovie';

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/admin" element={<MoviesAdmin />} />
            <Route path="/admin/NewMovie" element={<NewMovie />} />
          </Routes>
        </MainLayout>
      </BrowserRouter></>

  );
}

export default App;
