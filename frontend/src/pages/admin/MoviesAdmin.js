import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../components/loading/Loading';

function MoviesAdmin() {

  const [data, setData] = useState([]);
  const [message, setMessage] = useState(false);
  const [refresh, setrefresh] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('http://127.0.0.1:8000/api/')
      .then(resp => {
        setData(resp.data);
        setLoading(false);
      });
  }, [refresh]);

  const handleDelete = (id) => {
    setLoading(true);
    axios.delete('http://127.0.0.1:8000/api/' + id)
      .then(resp => {
        setMessage(resp.data);
        setLoading(false);
        setrefresh(!refresh);
      });
  }

  return (
    <>
      <Loading show={loading} />
      <h1>Edit your movies list</h1>
      {message && <div className="alert alert-success">{message}</div>}
      <button className="btn btn-success mb-3">Add new movie</button>
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
