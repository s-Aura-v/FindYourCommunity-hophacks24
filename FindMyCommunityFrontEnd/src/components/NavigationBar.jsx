import '../styles/NavigationBarStyle.css'
import axios from "axios";
import {backend_url} from "../config/constants.js";
import {useAuth0} from "@auth0/auth0-react";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export function NavigationBar() {
    const {logout, user, isAuthenticated, loginWithRedirect} = useAuth0();
    const addEvent = () => {
        axios.post(`${backend_url}/register`, {}, {
            withCredentials: true,  // Sends credentials like cookies if needed
            headers: {
                'Content-Type': 'application/json'  // Ensure the headers are correct
            }
        })
            .then(res => {
                console.log(res.data);  // Log the response from the backend
            })
            .catch(err => {
                console.error(err);  // Log any error
            });
    }
    // Function to handle the login and post-authentication logic
    useEffect(() => {
        if (user) {
            axios.post(backend_url + "/auth/checkUser", user, {
                withCredentials: true,  // Sends credentials like cookies if needed
                headers: {
                    'Content-Type': 'application/json'  // Ensure the headers are correct
                }
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.error(err);
            })
        }
    }, [user]); // Set userData once it's available
    const handleLogin = () => {
        loginWithRedirect();
    }
    /**
     * When user logout
     */
    const handleLogout = () => {
        logout().then(res => {
            console.log(res)
        });
    }
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <Link to={"/"}>

                        <img src="src/assets/FindMyCommunity-.png" alt="FindMyCommunity Logo" className="logo-img"/>
                    </Link>
                </div>
                <ul className="nav-links">
                    <li><a href="#" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Home</a></li>
                    <li><a href="#about-us">About Us</a></li>
                    <li>
                        {!isAuthenticated ? (<div className="login-button" onClick={() => {
                            handleLogin()
                        }}>Login</div>) : (<div className="login-button" onClick={() => {
                            handleLogout()
                        }}>
                            LogOut
                        </div>)}
                    </li>
                </ul>
            </nav>
        </>
    )
}
