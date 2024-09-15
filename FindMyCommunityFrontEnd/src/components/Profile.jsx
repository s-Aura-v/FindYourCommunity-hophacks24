import '../styles/profile.css';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import {Helmet} from "react-helmet";
import {Icon} from "leaflet";
import {OpenStreetMapProvider} from 'leaflet-geosearch';
import MarkerSVG from "../assets/marker.svg";
import FindMyCommunity from "../assets/FindMyCommunity-.png"
import React, {useState, useRef} from "react";
import {useAuth0} from "@auth0/auth0-react";
import Map from "./Map.jsx";
import axios from "axios";
import {backend_url} from "../config/constants.js";


export function Profile() {
    const {user} = useAuth0();
    const [eventsArray, setEventsArray]   = useState([]);
    const getiDs = async () => {
        const event = await axios.get<{ name, description, maxParticipants, date, timeStart, timeEnd, latitude, longitude }>(backend_url + "/people/events/");
        const eventData = event.data;
        setEventsArray(eventData);
        console.log(eventData);
    }

    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"/>
                <title>Leaflet</title>
            </Helmet>
            <div className="profile-container">
                <div className="user-profile">
                    <div>
                        <h2>Hello {user ? user.name : "user,"}</h2>
                        <span>{user ? <span>Email: {user.email}</span> : ""}</span>
                        <h2>{user ? <span>You have [x] upcoming events.</span> : "Sign in to see your saved events!"}</h2>
                    </div>
                    <div>
                        <img src={user ? user.picture : FindMyCommunity} alt="placeholder" width="160"/>
                    </div>
                </div>
                <Map/>
            </div>
        </>
    );
}
