import '../styles/profile.css'
import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import {Helmet} from "react-helmet";
import {Icon, divIcon, point} from "leaflet";

import MarkerSVG from "../assets/marker.svg"
import MarkerPNG from "../assets/markerpng.png"
import React, {useState} from "react";
import {CreateEvents} from "./CreateEvent.jsx";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, styled} from "@mui/material";

const BootstrapDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


export function Profile() {
    const position = [48.8566, 2.3522]
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const customIcon = new Icon({
        iconUrl: MarkerSVG,
        iconSize: [38, 38] // size of the icon
    });

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

    // Step 2: Function to add new marker with latitude and longitude from input fields
    const addMarker = (lat, lng) => {
        const newMarker = {
            geocode: [lat, lng],  // New geocode position from inputs
            popUp: `Marker at [${lat}, ${lng}]`
        };
        setMarkers([...markers, newMarker]);  // Add the new marker to the state
    };

    const handleAddMarker = () => {
        const lat = parseFloat(latitude); // Convert string input to float
        const lng = parseFloat(longitude); // Convert string input to float

        if (!isNaN(lat) && !isNaN(lng)) {
            addMarker(lat, lng);  // Call the function with input values
        } else {
            alert('Please enter valid latitude and longitude values');
        }
    };

    const [isEventOpen, setEventOpen] = useState(false);
    const [date, setDate] = useState(new Date());

    const handleEventOpen = () => {
        setEventOpen(true);
    };
    const handleEventClose = () => {
        setEventOpen(false);
    };


    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"/>
                <title>Leaflet</title>
            </Helmet>
            <div className="profile-container">
                <div className="user-profile">
                    Create Task
                </div>

                <div className="events-overview" id="find-events">
                    <div className="upcoming-events">
                        <h2>Upcoming Events</h2>
                        <div>
                            table of info;
                            backend required.
                        </div>
                    </div>
                    <div className="nearby-events">
                        <h2>Nearby Events</h2>
                        <div>
                            table of info;
                            backend required.
                        </div>
                    </div>
                </div>
                <div className="map">
                    <MapContainer center={position} zoom={12} scrollWheelZoom={false}
                                  style={{height: '100%', width: '100wh'}}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {markers.map((marker) => (
                            // eslint-disable-next-line react/jsx-key
                            <Marker position={marker.geocode} icon={customIcon}>
                                <Popup>{marker.popUp}</Popup>
                            </Marker>
                        ))}
                    </MapContainer></div>

                {/* Input fields for latitude and longitude */}
                <div className="marker-inputs">
                    <input
                        type="text"
                        placeholder="Enter Latitude"
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Enter Longitude"
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                    />
                    <button onClick={handleAddMarker} className="add-marker-button">
                        Add Marker
                    </button>
                </div>

                <div onClick={handleEventOpen}>
                    Hey
                </div>
                <BootstrapDialog
                    onClose={handleEventClose}
                    open={isEventOpen}
                    maxWidth='sm' x
                    fullWidth
                >
                    <DialogTitle className="popup-title">
                        <span> Create Events  </span>
                    </DialogTitle>
                    <DialogContent className="overflow-clip" dividers>
                        <div className="forms-container">
                            <form>
                                <label htmlFor="ename">Event Name:</label><br/>
                                <input type="text" id="ename" name="ename" placeholder="Enter the event name "
                                       size="32"/><br/>

                                <label htmlFor="tags">Event Description:</label><br/>
                                <input type="text" className="description" id="description" name="description"
                                       size="54"/><br/>


                                <label htmlFor="street">Street Address</label><br/>
                                <input type="text" id="street" name="street"/><br/>

                                <label htmlFor="postal-code">ZIP Code</label><br/>
                                <input type="text" className="postal-code" id="postal-code" name="postal-code"
                                       autoComplete="postal-code"/><br/>

                                <label htmlFor="city">City</label><br/>
                                <input type="text" className="city" id="city" name="city"/><br/>

                                <label htmlFor="country">Country</label><br/>
                                <input type="text" className="country" id="country" name="country"
                                       autoComplete="country"/><br/>

                                <label htmlFor="date">Date</label><br/>
                                <input type="date" id="date" name="date"/><br/>


                                <label htmlFor="tags">Maximum Participants</label><br/>
                                <input type="text" className="max-participants" id="max-participants"
                                       name="max-participants"/><br/>

                                <div className="marker-inputs">
                                    <input
                                        type="text"
                                        placeholder="Enter Latitude"
                                        value={latitude}
                                        onChange={(e) => setLatitude(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Enter Longitude"
                                        value={longitude}
                                        onChange={(e) => setLongitude(e.target.value)}
                                    />
                                    <button onClick={handleAddMarker} className="add-marker-button">
                                        Add Marker
                                    </button>
                                </div>
                            </form>
                        </div>


                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleEventClose}>
                            Close
                        </Button>
                    </DialogActions>
                </BootstrapDialog>


            </div>

        </>
    );
}
