import React from 'react';
import '../css/Form.css';

function LoginForm() {
    return (
        <body class="dark-mode">
        <div className="container d-flex justify-content-center align-items-center dark-mode" style={{height: '100vh'}}>
            <div class="center-container">
                <form>
                    <div className="form-floating my-3 text-info">
                        <h2 className="h2 text-center">Login</h2>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="username" placeholder="Username"/>
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control form-dark" id="password" placeholder="Password"/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div class="my-3">
                        <button type="submit" className="btn btn-primary w-100 py-2">Login</button>
                    </div>
                </form>
            </div>
        </div>
        </body>
    );
}

export default LoginForm;
