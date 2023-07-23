import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import List from "./List";
import EmailValidationForm from "./EmailValidationForm";

function App() {
    return (
        <BrowserRouter>
            <div>
                {/*<Nav/>*/}
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/dashboard" element={<List/>}/>
                    <Route path="/validation" element={<EmailValidationForm/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
