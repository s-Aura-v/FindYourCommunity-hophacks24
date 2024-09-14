import '../styles/profile.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Helmet } from "react-helmet";
import { Icon } from "leaflet";
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import MarkerSVG from "../assets/marker.svg";
import React, { useState, useRef } from "react";
import {useAuth0} from "@auth0/auth0-react";
import Map from "./Map.jsx";

export function Profile() {
    const position = [48.8566, 2.3522];
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [markers, setMarkers] = useState([
        {
            geocode: [48.86, 2.3522],
            popUp: "Hello, I am pop up 1"
        },
        {
            geocode: [48.85, 2.3522],
            popUp: "Hello, I am pop up 2"
        },
        {
            geocode: [48.855, 2.34],
            popUp: "Hello, I am pop up 3"
        }
    ]);

    const customIcon = new Icon({
        iconUrl: MarkerSVG,
        iconSize: [38, 38] // size of the icon
    });

    const searchInputRef = useRef(null);

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        const provider = new OpenStreetMapProvider();
        const query = searchInputRef.current.value;

        if (query) {
            const results = await provider.search({ query });
            if (results.length > 0) {
                const { x: lng, y: lat } = results[0];
                setLatitude(lat);
                setLongitude(lng);
                addMarker(lat, lng);
            } else {
                alert('Location not found');
            }
        }
    };

    const addMarker = (lat, lng) => {
        const newMarker = {
            geocode: [lat, lng],
            popUp: `Marker at [${lat}, ${lng}]`
        };
        setMarkers([...markers, newMarker]);
    };

    const handleAddMarker = () => {
        const lat = parseFloat(latitude);
        const lng = parseFloat(longitude);

        if (!isNaN(lat) && !isNaN(lng)) {
            addMarker(lat, lng);
        } else {
            alert('Please enter valid latitude and longitude values');
        }
    };;

    // New removeMarker function
    const removeMarker = (indexToRemove) => {
        setMarkers(markers.filter((_, index) => index !== indexToRemove));
    };

    const {user} = useAuth0();

    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
                <title>Leaflet</title>
            </Helmet>
            <div className="profile-container">
                <div className="user-profile">
                    <div>
                        <p>Hello {user ? user.name : "user"}</p>
                        {user ? <p>Email: {user.email}</p> : ""}
                    </div>
                    <div>
                        <img src={user ? user.picture : MarkerSVG} alt="placeholder" width="80" />
                    </div>
                </div>

                <Map/>
            </div>
        </>
    );
}
