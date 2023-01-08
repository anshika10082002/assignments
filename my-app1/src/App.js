import Navbar from "./Navbar";
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Books from './pages/Home'
import { Route,Routes } from "react-router-dom";

function App(){
    return (
        <>
        <Navbar/>
        
        <div className="container">
            <Routes>
                <Route path="/" element={<Books/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
            </Routes>
        </div>
        </>
    )
}
export default App;