import React from 'react';
import '../../css/Form.css';
import {Col, Row} from "react-bootstrap";

function EmailValidationForm() {

    return (
        <body className="dark-mode">
        <div className="container d-flex justify-content-center align-items-center dark-mode" style={{height: '100vh'}}>
            <div className="center-container">
                <form className="glass">
                    <div className="form-floating my-3 text-info">
                        <h2 className="h2 text-center">Email Validation</h2>
                    </div>
                    <div className="form-floating">
                        <input type="text" name="code" className="form-control" id="code" placeholder="Code"
                               value="" />
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
                                <button type="submit" className="btn btn-primary w-100 py-2">Receive again</button>
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
