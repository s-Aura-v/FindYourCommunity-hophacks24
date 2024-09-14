// App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout.jsx";
import LoginButton from "./Authentication/login.jsx";
import LogoutButton from "./Authentication/logout.jsx";
import Profile from "./Authentication/profile.jsx";
function App() {
    return (
        <div>
            <Routes>
                {/* Define Layout with nested routes */}
                <Route path="/" element={<Layout  />}>
                    <Route path="/login" element={<LoginButton />} />
                    <Route path="/logout" element={<LogoutButton />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
