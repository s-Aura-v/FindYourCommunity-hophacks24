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

export function Profile() {
    const {user} = useAuth0();
    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"/>
                <title>Leaflet</title>
            </Helmet>
            <div className="profile-container">
                <div className="user-profile">
                    <div>
                        <h2>Hello {user ? user.name : "user"}</h2>
                        <span>{user ? <p>Email: {user.email}</p> : ""}</span>
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
