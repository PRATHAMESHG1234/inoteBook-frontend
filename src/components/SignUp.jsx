import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertContext from '../context/notes/AlertContext';
const SignUp = () => {
  const context = useContext(AlertContext);
  const { showAlert } = context;
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://thankful-lime-twill.cyclic.app/api/auth/createuser`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );

    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authToken);
      navigate('/');
      showAlert('Account Ceated Succesfully', 'success');
    } else {
      showAlert('Invalied Credentials', 'danger');
    }
  };
  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            aria-describedby='emailHelp'
            onChange={handleChange}
          />
          <div id='emailHelp' className='form-text'>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            onChange={handleChange}
            minLength='5'
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='cpassword' className='form-label'>
            Confirm Password
          </label>
          <input
            type='password'
            className='form-control'
            id='cpassword'
            name='cpassword'
            onChange={handleChange}
            minLength='5'
            required
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
