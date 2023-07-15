import logo from '../../assets/TODO_WHITE.png';
import '../../css/Home.css';
import React, {useEffect, useRef, useState} from "react";
import {CheckToken} from "../API/api";
import {Button, Col, Row, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";

function Home() {
    const [loading, setLoading] = useState(true);
    const [check, setCheck] = useState(false);
    const isFirstRender = useRef(true);
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        setLoading(true);

        CheckToken()
            .then(response => {
                console.log(response);
                setCheck(true);
                setLoading(false);
            })
            .catch(error => {
                console.log(error.response.data.message);
                setCheck(false);
                setLoading(false);
            });
    }, [check]);

    if (loading) {
        return (
            <div className="loading-container">
                <Spinner animation="border" role="status"></Spinner>
                <div className="loading-text">Loading...</div>
            </div>
        );
    }
    return (
        <div className="Home">
            <header className="Home-header">
                <img src={logo} className="Home-logo" alt="logo"/>
                <br/>
                {check ?
                    <Row>
                        <Col>
                            <Button variant="danger" size="lg">
                                <Link to="/logout" className="nav-link">Logout</Link>
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="success" size="lg">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </Button>
                        </Col>
                    </Row> :
                    <Row>
                        <Col>
                            <Button variant="success" size="lg">
                                <Link to="/login" className="nav-link">Login</Link>
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="primary" size="lg">
                                <Link className="nav-link" to="/signup">Signup</Link>
                            </Button>
                        </Col>
                    </Row>
                }
                <br/>
                <a
                    className="Home-link"
                    href="https://smabf.ir/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    SMABF
                </a>
            </header>
        </div>
    );
}

export default Home;