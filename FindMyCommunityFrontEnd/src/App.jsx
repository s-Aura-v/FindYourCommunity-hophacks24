import './App.css'
import {MainPage} from "./pages/MainPage.jsx";
import {Route, Routes} from "react-router-dom";
import Admin from "./components/AdminDashBoard/Admin.jsx";
import AdminDashBoard from "./components/AdminDashBoard/AdminDashBoard.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route index element={<MainPage/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/admin/dashboard" element={<AdminDashBoard/>}/>
            </Routes>
        </>
    )
}

export default App
