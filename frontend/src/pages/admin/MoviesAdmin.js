import { useContext, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MainContext from '../../context/MainContext';

function MoviesAdmin() {

  const { data, setLoading, setData, refresh, setRefresh, setMessage } = useContext(MainContext);

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
        setMessage({ m: resp.data, s: 'success' });
        setRefresh(!refresh);
      })
      .finally(() => setLoading(false));
  }

  return (
    <>
      <h1 className="text-center text-white">Edit your movies list</h1>
      <Link to="/admin/newMovie" className="btn btn-success mb-3">Add new movie</Link>
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
