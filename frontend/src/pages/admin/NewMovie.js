import { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MainContext from '../../context/MainContext';

function NewMovie() {

  const { setLoading, setMessage } = useContext(MainContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    setLoading(true);
    axios.post('http://127.0.0.1:8000/api/movies', data)
      .then(resp => {
        setMessage({ m: resp.data, s: 'success' });
        setTimeout(() => navigate('/admin'), 2000);
      })
      .catch(error => {
        setMessage({ m: error.response, data, s: 'danger' })
      })
      .finally(() => setLoading(false));
  }

  return (
    <>
      <main className="form-signin w-50 m-auto">
        <form onSubmit={handleSubmit}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-film text-warning" viewBox="0 0 16 16" />
          <h1 className="h3 mb-3 fw-normal">New Movie</h1>
          <div className="form-floating">
            <input type="text" name="name" className="form-control" id="floatingInput" />
            <label htmlFor="floatingInput text-dark">Title</label>
          </div>
          <div className="form-floating">
            <input type="number" name="year" className="form-control" id="floatingPassword" />
            <label htmlFor="floatingPassword text-dark">Year</label>
          </div>
          <div className="form-floating">
            <input type="text" name="photo" className="form-control" id="floatingPassword" />
            <label htmlFor="floatingPassword text-dark">Cover</label>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <button className="w-50 btn btn-lg btn-success" type="submit">Save</button>
          </div>
        </form>
      </main>
    </>
  )
}

export default NewMovie;