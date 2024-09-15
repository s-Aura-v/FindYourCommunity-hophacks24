import { NavigationBar } from "../NavigationBar.jsx";
import { useEffect, useState } from "react";
import { backend_url } from "../../config/constants.js";
import axios from "axios";

function AdminDashBoard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(backend_url + '/auth/getAllUsers', {
            withCredentials: true,
        }).then((response) => {
            setUsers(response.data);
        })
    }, [users])

    const handleAdminToggle = (userId) => {
        console.log(userId);
        axios.post(backend_url + '/auth/changingAdminPermission', {userId: userId}, {
            withCredentials: true,
        }).then(response => {
            console.log('Update successful:', response.data);

            alert('Changes have been processed.');
        }).catch(error => {
            console.error('Error updating users:', error);
            alert('Error processing changes.');
        });
    };


    return (
        <div>
            <NavigationBar />
            <h1>User Table</h1>
            <table border="1" style={{ width: '100%', textAlign: 'left' }}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Admin (Yes/No)</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            {user.admin ? 'Yes' : 'No'}
                        </td>
                        <td>
                            <button onClick={() => handleAdminToggle(user.id)}>
                                Toggle Admin
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <br />
        </div>
    );
};

export default AdminDashBoard;
