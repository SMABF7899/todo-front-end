import React, {useState} from 'react';
import { useForm } from './formHooks';
import '../css/Form.css'
import {handleSubmitForm} from "./formUtils";

function SignupForm() {
    const { formData, handleChange, handleSubmit } = useForm();

    return (
        <body className="dark-mode">
        <div className="container d-flex justify-content-center align-items-center dark-mode" style={{height: '100vh'}}>
            <div className="center-container">
                <form className="glass" onSubmit={handleSubmit}>
                    <div className="form-floating my-3 text-info">
                        <h2 className="h2 text-center">Signup</h2>
                    </div>
                    <div className="form-floating">
                        <input type="text" name="firstName" className="form-control" id="firstname" placeholder="First Name" value={formData.firstName} onChange={handleChange}/>
                        <label htmlFor="firstname">First Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" name="lastName" className="form-control" id="lastname" placeholder="Last Name" value={formData.lastName} onChange={handleChange}/>
                        <label htmlFor="lastname">Last Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" name="username" className="form-control" id="username" placeholder="Username" value={formData.username} onChange={handleChange}/>
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" name="email" className="form-control" id="email" placeholder="name@example.com" value={formData.email} onChange={handleChange}/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" name="password" className="form-control form-dark" id="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="my-3">
                        <button type="submit" className="btn btn-primary w-100 py-2">Signup</button>
                    </div>
                    <p id="error-message" className="error"></p> {}
                </form>
            </div>
        </div>
        </body>
    );
}

export default SignupForm;