import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function Header({ setData }) {

  // const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    if (e.target.value === '') return;

    axios.get('http://127.0.0.1:8000/api/movies/s/' + e.target.value)
      .then(resp => setData(resp.data));
  }


  return (
    <header className="p-3 mb-5">
      <div className="container">
        <div className="d-flex justify-content-between">
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-film text-warning" viewBox="0 0 16 16">
              <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
            </svg>
            <h3 className="ps-2 mb-0">FavMovies</h3>
          </Link>
          <div className=" search d-flex">
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" onKeyUp={handleSearch} />
              <button className="btn search">Search</button>
            </form>
            <div className="text-end">
              <button type="button" className="btn btn-warning me-2">Login</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;