import Header from '../components/header/Header';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Movies() {

  const [data, setData] = useState([]);

  useEffect(() => {

    axios.get('http://127.0.0.1:8000/api/movies')
      .then(resp => setData(resp.data));
  }, []);

  return (
    <>
      <Header />
      <Link to="/admin" className="btn btn-success mb-4">Add or delete movie</Link>
      <div class="row">
        {data.map(movie =>
          <div class="col-3 mb-3">
            <div class="card shadow-sm bg-dark">
              <img
                src={movie.photo}
                alt={movie.name}
              />
              <div class="card-body text-white">
                <h4>{movie.name}</h4>
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-muted">{movie.year}</small>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Movies;
