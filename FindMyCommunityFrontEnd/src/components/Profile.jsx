import '../styles/profile.css';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import {Helmet} from "react-helmet";
import {Icon} from "leaflet";
import {OpenStreetMapProvider} from 'leaflet-geosearch';
import MarkerSVG from "../assets/marker.svg";
import React, {useState, useRef} from "react";

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
            const results = await provider.search({query});
            if (results.length > 0) {
                const {x: lng, y: lat} = results[0];
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
    };

    // New removeMarker function
    const removeMarker = (indexToRemove) => {
        setMarkers(markers.filter((_, index) => index !== indexToRemove));
    };

    const [isEventOpen, setEventOpen] = useState(false);

    const handleEventOpen = () => {
        setEventOpen(true);
    };
    const handleEventClose = () => {
        setEventOpen(false);
    };

    let user = "Placeholder";
    let rating = "null";

    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"/>
                <title>Leaflet</title>
            </Helmet>
            <div className="profile-container">
                <div className="user-profile">
                    <div>
                        Hello {user} <br/>
                        Your current rating is {rating}.
                    </div>
                    <div>
                        <img src={MarkerSVG} alt="placeholder" width="80"/>
                    </div>
                </div>

                <div className="events-overview" id="find-events">
                    <div className="upcoming-events">
                        <h2>Create Event</h2>
                        <div className="forms-container">
                            <form>
                                <label htmlFor="ename">Event Name:</label><br/>
                                <input type="text" id="ename" name="ename" placeholder="Enter the event name "
                                       size="32"/><br/>

                                <label htmlFor="description">Event Description:</label><br/>
                                <input type="" className="description" id="description" name="description"
                                       size="32"/><br/>

                                <label htmlFor="tags">Tags:</label><br/>
                                <select>
                                    <option value="0">Select Type:</option>
                                    <option value="1">Food bank</option>
                                    <option value="2">School Event</option>
                                    <option value="3">Cleanup</option>
                                    <option value="4">Animal Work</option>
                                    <option value="5">Blood Drive</option>
                                    <option value="6">Misc</option>
                                </select><br/>

                                <label htmlFor="date">Date</label><br/>
                                <input type="date" id="date" name="date"/><br/>

                                <label htmlFor="tags">Maximum Participants</label><br/>
                                <input type="text" className="max-participants" id="max-participants"
                                       name="max-participants"/><br/>

                                <label htmlFor="exact-location">Location</label><br/>
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

                                    <form onSubmit={handleSearchSubmit}>
                                        <input ref={searchInputRef} type="text" placeholder="Search for a location"/>
                                        <button type="submit">Search</button>
                                    </form>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="nearby-events">
                        <h2>Upcoming Events</h2>
                        <div>
                            table of info;
                            backend required.
                        </div>
                    </div>
                </div>

                <div className="map">
                    <MapContainer center={position} zoom={12} scrollWheelZoom={false}
                                  style={{height: '100%', width: '100wh'}}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {markers.map((marker, index) => (
                            <Marker key={index} position={marker.geocode} icon={customIcon}>
                                <Popup>
                                    {marker.popUp}
                                    <br/>
                                    <button onClick={() => removeMarker(index)}>Remove Marker</button>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>
        </>
    );
}
