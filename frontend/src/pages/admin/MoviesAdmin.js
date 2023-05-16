import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../../components/loading/Loading';

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
      <Loading show={loading} />
      <h1>Edit your movies list</h1>
      {message && <div className="alert alert-success">{message}</div>}
      <Link to="/admin/newMovie" className="btn btn-success mb-3">Add new movie</Link>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Cover</th>
            <th>Title</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {data.map(movie =>
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td><img src={movie.photo} alt={movie.name}></img></td>
              <td>{movie.name}</td>
              <td>{movie.year}</td>
              <td><button className="btn btn-danger" onClick={() => handleDelete(movie.id)}>Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default MoviesAdmin;
