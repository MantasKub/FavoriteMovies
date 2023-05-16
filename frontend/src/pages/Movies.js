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
      <h1>My favorite movies</h1>
      <Link to="/admin" className="btn btn-success mb-3">Add or delete movie</Link>
      <div className="row">
        {data.map(movie =>
          <div className="col-4" key={movie.id}>
            <img
              src={movie.photo}
              alt={movie.name}
            />
            <h4>{movie.name}</h4>
          </div>
        )}
      </div>
    </>
  )
}

export default Movies;
