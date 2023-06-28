import React, { useState } from 'react';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Fetch user details from the server
    fetch('http://localhost:4000/NewUser')
      .then((response) => response.json())
      .then((data) => {
        const foundUser = data.find((user) => user.email === username && user.password === password);

        if (foundUser) {
          // Login successful
          console.log('Login success');
        } else {
          // Login failed
          console.log('Login failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='container border-1 border' id='cont'>
      <div className='row'>
        <div className='col-12 py-5 shadow mb-5'>
          <h2>Login with Acecraft</h2>
          <form className='login-form' onSubmit={handleLogin}>
            <div className='form-group'>
              <label htmlFor='username'>Username:</label>
              <input
                type='text'
                id='username'
                name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className='bg-black text-white' type='submit'>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
