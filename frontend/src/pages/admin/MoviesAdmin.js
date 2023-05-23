import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import Header from '../../components/header/Header';

function MoviesAdmin() {

  const [data, setData] = useState([]);
  const [message, setMessage] = useState();
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('http://127.0.0.1:8000/api/movies/')
      .then(resp => {
        setData(resp.data);
      })
      .finally(() => setLoading(false));
  }, [refresh]);

  const handleDelete = (id) => {
    setLoading(true);
    axios.delete('http://127.0.0.1:8000/api/movies/' + id)
      .then(resp => {
        setMessage(resp.data);
        setRefresh(!refresh);
      })
      .finally(() => setLoading(false));
  }

  return (
    <>
      <Header />
      <Loading show={loading} />
      <h1 className="text-center text-white">Edit your movies list</h1>
      {message && <div className="alert alert-success">{message}</div>}
      <Link to="/admin/newMovie" className="btn btn-success mb-3">Add new movie</Link>
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
                  <button className="btn btn-danger" onClick={() => handleDelete(movie.id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default MoviesAdmin;
