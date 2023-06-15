import React from 'react';
import '../css/Form.css'

function SignupForm() {
    return (
        <body className="dark-mode">
        <div className="container d-flex justify-content-center align-items-center dark-mode" style={{height: '100vh'}}>
            <div className="center-container">
                <form className="glass">
                    <div className="form-floating my-3 text-info">
                        <h2 className="h2 text-center">Signup</h2>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="firstname" placeholder="First Name"/>
                        <label htmlFor="firstname">First Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="lastname" placeholder="Last Name"/>
                        <label htmlFor="lastname">Last Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="username" placeholder="Username"/>
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control form-dark" id="password" placeholder="Password"/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="my-3">
                        <button type="submit" className="btn btn-primary w-100 py-2">Signup</button>
                    </div>
                </form>
            </div>
        </div>
        </body>
    );
}

export default SignupForm;