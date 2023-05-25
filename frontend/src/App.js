import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

function App() {

  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();
  const [user, setUser] = useState(false);

  const contextValues = {
    data,
    setData,
    refresh,
    setRefresh,
    loading,
    setLoading,
    message,
    setMessage,
    user,
    setUser
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) return;

    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    axios.get('http://127.0.0.1:8000/api/check')
      .then(resp => setUser(true));
  }, [])
  return (
    <>
      <BrowserRouter>
        <MainContext.Provider value={contextValues}>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Movies />} />
              {user ?
                <>
                  <Route path="/admin" element={<MoviesAdmin />} />
                  <Route path="/admin/NewMovie" element={<NewMovie />} />
                </>
                :
                <>
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                </>
              }
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </MainLayout>
        </MainContext.Provider>
      </BrowserRouter></>

  );
}

export default App;
