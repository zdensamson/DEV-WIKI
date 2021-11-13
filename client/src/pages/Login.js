import React from 'react'

const Login = () => {
    return (

        <div>
            <div className="container">
                <h1>Login</h1>

                <form className='loginForm' action="/register" method="POST">
                    <div>
                        <label for="email">Email</label>
                        <input className="form-control" type="text" name="email" id="emailLogin"></input>
                    </div>
                    <div className="mb-2">
                        <label for="password">Password</label>
                        <input className="form-control" type="password" name="password" id="passwordLogin"></input>
                    </div>
                    <button type="submit">Login!</button>
                </form>
            </div>

            <div className="container">

                <h1>Register</h1>

                <form className="registerForm" action="/register" method="POST">

                    <div>
                        <label for="name">Username</label>
                        <input className="form-control" type="text" name="username" id="usernameSignup"></input>
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input className="form-control" type="text" name="email" id="emailSignup"></input>
                    </div>
                    <div className="mb-2">
                        <label for="password">Password</label>
                        <input className="form-control" type="password" name="password" id="passwordSignup"></input>
                    </div>
                    <button type="submit">Register!</button>
                </form>
            </div>
        </div>
    )
}

export default Login
