import { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MainContext from '../context/MainContext';

function Login() {

  const { setLoading, setMessage, setUser } = useContext(MainContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    setLoading(true);
    axios.post('http://127.0.0.1:8000/api/login', data)
      .then(resp => {
        setMessage({ m: resp.data.message, s: 'success' });
        setUser(true);
        localStorage.setItem('token', resp.data.token);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + resp.data.token;
        setTimeout(() => navigate('/admin'), 2000);
      })
      .catch(error => {
        setMessage({ m: error.response.data, data, s: 'danger' })
      })
      .finally(() => setLoading(false));
  }

  return (
    <>
      <main className="form-signin w-50 m-auto">
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal">Login</h1>
          <div className="form-floating">
            <input type="text" name="name" className="form-control" id="floatingInput" />
            <label htmlFor="floatingInput text-dark">User name</label>
          </div>
          <div className="form-floating">
            <input type="password" name="password" className="form-control" id="floatingPassword" />
            <label htmlFor="floatingPassword text-dark">Password</label>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <button className="w-50 btn btn-lg btn-success" type="submit">Login</button>
          </div>
        </form>
      </main >
    </>
  )
}

export default Login;