import {Outlet, BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Nav from '../Nav/Nav';
import List from "./List";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/dashboard" element={<List/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
