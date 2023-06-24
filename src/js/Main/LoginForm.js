import React from 'react';
import '../../css/Form.css';
import {useFormLogin} from '../API/formHooks';

function LoginForm() {
    const {formLoginData, handleChange, handleSubmit} = useFormLogin();

    return (
        <body className="dark-mode">
        <div className="container d-flex justify-content-center align-items-center dark-mode" style={{height: '100vh'}}>
            <div className="center-container">
                <form className="glass" onSubmit={handleSubmit}>
                    <div className="form-floating my-3 text-info">
                        <h2 className="h2 text-center">Login</h2>
                    </div>
                    <div className="form-floating">
                        <input type="text" name="username" className="form-control" id="username" placeholder="Username"
                               value={formLoginData.username} onChange={handleChange}/>
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" name="password" className="form-control form-dark" id="password" placeholder="Password"
                               value={formLoginData.password} onChange={handleChange}/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="my-3">
                        <button type="submit" className="btn btn-primary w-100 py-2">Login</button>
                    </div>
                    <p id="info-message" className="info"></p> {}
                </form>
            </div>
        </div>
        </body>
    );
}

export default LoginForm;
