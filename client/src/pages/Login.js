import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = props => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: ''
    });
  };

  return (
    <main className="pt-4 loginPage">
      <div  className="flex-row justify-center container">
        <div className="col-12 col-md-6">
          <div className="card">
            <h4 className="card-header">Login</h4>
            <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  id="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <br></br>
                <button className="btn btn-secondary mt-3" type="submit">
                  Login
                </button>
              </form>

              {error && <div>Login failed</div>}
            </div>
          </div>
        </div>
        <a href="/signup" className="btn btn-secondary btn-lg active my-3 " role="button" aria-pressed="true">Sign Up</a>
      </div>

     
    </main>
  );
};

export default Login;
