import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useContext } from 'react';
import MainContext from '../../context/MainContext';
import { useNavigate } from 'react-router-dom';

function Header() {

  const [search, setSearch] = useState('');
  const { setData, setRefresh, user, setUser, setMessage, setLoading } = useContext(MainContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (search === '') return setRefresh(last => !last);

    axios.get('http://127.0.0.1:8000/api/movies/s/' + search)
      .then(resp => setData(resp.data));
  }

  const handleLogout = () => {
    setLoading(true);
    axios.get('http://127.0.0.1:8000/api/logout')
      .then(() => {
        setMessage({ m: 'Logout successful', s: 'success' });
        setUser(false);
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
        setTimeout(() => navigate('/'), 2000);
      })
      .catch(error => {
        setMessage({ m: error.response.data.message, s: 'danger' })
      })
      .finally(() => setLoading(false));
  }


  return (
    <header className="p-3 mb-5">
      <div className="container">
        <div className="d-flex justify-content-between">
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-film text-warning" viewBox="0 0 16 16">
              <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
            </svg>
            <h3 className="ps-2 mb-0">FavMovies</h3>
          </Link>
          <div className=" search d-flex">
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 input-group" role="search" onSubmit={handleSearch}>
              <input type="search" className="form-control form-control-dark text-bg-dark border-dark" placeholder="Search..." aria-label="Search" onKeyUp={(e) => setSearch(e.target.value)} />
              <button className="btn">Search</button>
            </form>
            {!user ?
              <div className="text-end d-flex">
                <Link to="/login" className="btn btn-warning me-2">Login</Link>
                <Link to="/register" className="btn btn-warning me-2">Register</Link>
              </div>
              :
              <div className="text-end">
                <button className="btn btn-warning me-2" onClick={handleLogout}>Logout</button>
              </div>
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;