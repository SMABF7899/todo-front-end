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

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };


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
                <div className="Home-logo">
                    TODO
                </div>
                {check ?
                    <Row>
                        <Col>
                            <Button variant="danger" size="lg" onClick={handleLogout}>
                                Logout
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
                <a href="https://smabf.ir/" className="d-flex align-items-center justify-content-center Home-link" target="_blank" rel="noopener noreferrer">
                    <img src="https://smabf.ir/wp-content/uploads/2023/02/SMABF.png" height="30" alt="smabf.ir"/>
                </a>
            </header>
        </div>
    );
}

export default Home;