import React, {useEffect, useRef} from 'react';
import '../../css/Form.css';
import {useFormLogin} from '../API/formHooks';
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {CheckToken} from "../API/api";

function LoginForm() {
    const {formLoginData, handleChange, handleSubmit} = useFormLogin();
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
    }, [navigate]);

    const goToHomePage = () => {
        navigate('/');
    };

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

export default LoginForm;
