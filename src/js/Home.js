import logo from '../assets/TODO_WHITE.png';
import '../css/Home.css';

function Home() {
    return (
        <div className="Home">
            <header className="Home-header">
                <img src={logo} className="Home-logo" alt="logo"/>
                <br/>
                <p>
                    Powered By React
                </p>
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