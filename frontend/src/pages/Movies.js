import { useState, useEffect } from 'react';
import axios from 'axios';

function Movies() {

  const [data, setData] = useState([]);

  useEffect(() => {

    axios.get('http://127.0.0.1:8000/api/')
      .then(resp => setData(resp.data));
  }, []);

  return (
    <div className="container py-3">
      <h1>My favorit movies</h1>
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
    </div>
  )
}

export default Movies;
