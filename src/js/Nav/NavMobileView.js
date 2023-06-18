import React from 'react';
import logo from '../../assets/TODO.png';
import '../../css/Form.css'

function NavMobileView() {
    return (
        <body>
        <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} className="Nav-logo" alt="logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">TODO</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link" href="/src/js/Main/Login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/src/js/Main/Signup">Signup</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        </body>
    );
}

export default NavMobileView;