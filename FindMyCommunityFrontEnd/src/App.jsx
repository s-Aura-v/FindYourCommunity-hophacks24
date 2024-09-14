// App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout.jsx";
import LoginButton from "./Authentication/login.jsx";
import Profile from "./Authentication/profile.jsx";
import LogoutButton from "./Authentication/logout.jsx";
import BackendTest from "./Authentication/backendTest.jsx";
function App() {
    return (
        <div>
            <Routes>
                {/* Define Layout with nested routes */}
                <Route path="/" element={<Layout  />}>
                    <Route path="/login" element={<LoginButton />} />
                    <Route path="/logout" element={<LogoutButton />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/backend" element={<BackendTest/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
