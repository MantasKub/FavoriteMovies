import './App.css';
import { useState } from 'react';

//React router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Layout
import MainLayout from './layouts/MainLayout';

//Context
import MainContext from './context/MainContext';

//Pages
import Movies from './pages/Movies';
import MoviesAdmin from './pages/admin/MoviesAdmin';
import NewMovie from './pages/admin/NewMovie';

function App() {

  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();

  const contextValues = {
    data,
    setData,
    refresh,
    setRefresh,
    loading,
    setLoading,
    message,
    setMessage
  }
  return (
    <>
      <BrowserRouter>
        <MainContext.Provider value={contextValues}>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Movies />} />
              <Route path="/admin" element={<MoviesAdmin />} />
              <Route path="/admin/NewMovie" element={<NewMovie />} />
            </Routes>
          </MainLayout>
        </MainContext.Provider>
      </BrowserRouter></>

  );
}

export default App;
