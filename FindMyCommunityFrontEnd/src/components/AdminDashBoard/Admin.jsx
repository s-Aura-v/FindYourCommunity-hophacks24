import {NavigationBar} from "../NavigationBar.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


function Admin() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your authentication logic here
        if (username === "pphyo" && password === "hello") {
            navigate("/admin/dashboard")
        }
        setPassword('');
        setUsername('');
    };

    return (
        <div>
            <NavigationBar />
            <div style={{textAlign: 'center', marginTop: '50px'}}>
                <h1>Admin Login</h1>
                <form onSubmit={handleSubmit}>
                    <div style={{marginBottom: '20px'}}>
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            style={{marginLeft: '10px', padding: '5px'}}
                        />
                    </div>
                    <div style={{marginBottom: '20px'}}>
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{marginLeft: '12px', padding: '5px'}}
                        />
                    </div>
                    <button type="submit" style={{padding: '10px 20px'}}>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Admin;