import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/header/Header';

function Movies() {

  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {

    axios.get('http://127.0.0.1:8000/api/movies')
      .then(resp => setData(resp.data));
  }, [refresh]);

  return (
    <>
      <Header setData={setData} setRefresh={setRefresh} />
      <Link to="/admin" className="btn btn-success mb-4">Add or delete movie</Link>
      <div className="row">
        {data.map(movie =>
          <div className="col-3 mb-3" key={movie.id}>
            <div className="card shadow-sm bg-dark">
              <img
                src={movie.photo}
                alt={movie.name}
              />
              <div className="card-body text-white">
                <h4>{movie.name}</h4>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">{movie.year}</small>
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
