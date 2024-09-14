import '../styles/NavigationBarStyle.css'
import axios from "axios";
import {backend_url} from "../config/constants.js";

export function NavigationBar() {

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
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <a href="#" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                        <img src="src/assets/FindMyCommunity-.png" alt="FindMyCommunity Logo" className="logo-img"/>
                    </a>
                </div>

                <ul className="nav-links">
                    <li><a href="#" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Home</a></li>
                    <li><a href="#find-events">Find Events</a></li>
                    <li>
                        <button onClick={() => {
                            addEvent();
                        }}>Add Event
                        </button>
                    </li>
                    <li><a href="#about-us">About Us</a></li>
                    <li><a href="#log-in">Log In</a></li>
                </ul>
            </nav>
        </>
    )
}
