import React, { useState } from 'react';
import '../../css/Form.css';
import {Col, Row} from "react-bootstrap";
import {CheckCodeForEmailValidation, SendCodeForEmailValidation} from "../API/api";
import {displayErrorMessage, displaySuccessMessage} from "../API/formUtils";
import {useNavigate} from "react-router-dom";

function EmailValidationForm() {
    const navigate = useNavigate();
    const [code, setCode] = useState("");
    const handleChange = (event) => {
        setCode(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        CheckCodeForEmailValidation(code)
            .then(result => {
                console.log(result);
                displaySuccessMessage("Your email has been successfully verified")
                setTimeout(() => {
                    navigate('/dashboard');
                }, 500);
            })
            .catch(result => {
                console.log(result);
                displayErrorMessage("The entered code is not correct")
            });
    };

    const ReceiveAgain = () => {
        SendCodeForEmailValidation(localStorage.getItem('Username'))
            .then(result => {
                console.log(result.message);
                displaySuccessMessage(result.message)
            })
            .catch(result => {
                console.log(result.response.data.message);
            });
    };
    return (
        <body className="dark-mode">
        <div className="container d-flex justify-content-center align-items-center dark-mode" style={{height: '100vh'}}>
            <div className="center-container">
                <form className="glass" onSubmit={handleSubmit}>
                    <div className="form-floating my-3 text-info">
                        <h2 className="h2 text-center">Email Validation</h2>
                    </div>
                    <div className="form-floating">
                        <input type="number" name="code" className="form-control" id="code" placeholder="Code" onChange={handleChange} value={code}/>
                        <label htmlFor="code">Code</label>
                    </div>
                    <Row>
                        <Col>
                            <div className="my-3">
                                <button type="submit" className="btn btn-primary w-100 py-2">Send</button>
                            </div>
                        </Col>
                        <Col>
                            <div className="my-3">
                                <button type="button" className="btn btn-primary w-100 py-2" onClick={ReceiveAgain}>Receive again</button>
                            </div>
                        </Col>
                    </Row>
                    <div id="info-message" className="" style={{width: '100%', fontSize: '16px'}}></div> {}
                </form>
            </div>
        </div>
        </body>
    );
}

export default EmailValidationForm;
