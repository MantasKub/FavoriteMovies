import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Message from '../../components/message/Message';

function NewMovie() {

  const [message, setMessage] = useState({
    m: null,
    s: 'success'
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    axios.post('http://127.0.0.1:8000/api/movies', data)
      .then(resp => setMessage({ m: resp.data, s: 'success' }))
      .catch(error => setMessage({ m: error.response.data, s: 'danger' }));
  }

  return (
    <>
      <h1>New Movie</h1>
      <Message message={message} />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Title</label>
          <input type="text" name="name" className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Year</label>
          <input type="number" name="year" className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Cover</label>
          <input type="text" name="photo" className="form-control" required />
        </div>
        <button className="btn btn-success">Save</button>
      </form>
    </>
  )
}

export default NewMovie;