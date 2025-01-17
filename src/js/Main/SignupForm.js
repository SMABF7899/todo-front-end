import React, {useEffect, useRef} from 'react';
import {useFormSignup} from '../API/formHooks';
import '../../css/Form.css'
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {CheckToken} from "../API/api";

function SignupForm() {
    const {formSignupData, handleChange, handleSubmit} = useFormSignup();
    const navigate = useNavigate();
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        setTimeout(() => {
            CheckToken()
                .then(data => {
                    console.log(data.message);
                    navigate('/');
                })
                .catch(error => {
                    console.error(error.response.data.message);
                })
        }, 50);
    }, []);

    const goToHomePage = () => {
        navigate('/');
    };

    return (
        <body className="dark-mode">
        <div className="container d-flex justify-content-center align-items-center dark-mode" style={{height: '100vh'}}>
            <div className="center-container">
                <form className="glass" onSubmit={handleSubmit}>
                    <div className="form-floating my-3 text-info">
                        <h2 className="h2 text-center">Signup</h2>
                    </div>
                    <div className="form-floating">
                        <input type="text" name="firstName" className="form-control" id="firstname"
                               placeholder="First Name" value={formSignupData.firstName} onChange={handleChange}/>
                        <label htmlFor="firstname">First Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" name="lastName" className="form-control" id="lastname"
                               placeholder="Last Name" value={formSignupData.lastName} onChange={handleChange}/>
                        <label htmlFor="lastname">Last Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" name="username" className="form-control" id="username" placeholder="Username"
                               value={formSignupData.username} onChange={handleChange}/>
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" name="email" className="form-control" id="email"
                               placeholder="name@example.com" value={formSignupData.email} onChange={handleChange}/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" name="password" className="form-control form-dark" id="password"
                               placeholder="Password" value={formSignupData.password} onChange={handleChange}/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="my-3">
                        <button type="submit" className="btn btn-primary w-100 py-2">Signup</button>
                    </div>
                    <div id="info-message" className="" style={{width: '100%', fontSize: '16px'}}></div> {}
                    <Button variant="dark" className="container logo-font btn-lg mt-3" onClick={goToHomePage}>
                        TODO
                    </Button>
                </form>
            </div>
        </div>
        </body>
    );
}

export default SignupForm;