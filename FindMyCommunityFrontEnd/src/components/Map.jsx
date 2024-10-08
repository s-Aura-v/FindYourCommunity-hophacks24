import {useEffect, useRef, useState} from 'react';
import {Icon} from "leaflet";
import MarkerSVG from "../assets/marker.svg";
import {OpenStreetMapProvider} from "leaflet-geosearch";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {backend_url} from "../config/constants.js";
import axios from "axios";
import {useAuth0} from "@auth0/auth0-react";
import {getAdminStatus} from "../config/authentication.js";

function Map() {
    const [isAdmin, setIsAdmin] = useState(false)
    const {isAuthenticated, user} = useAuth0();
    const position = [40.7128, -74.0060];
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [markers, setMarkers] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);


    const [eventsArray, setEventsArray] = useState([]);
    const getiDs = async () => {
        const event = await axios.get < {
            eventName,
            description,
            maxParticipants,
            date,
            timeStart,
            timeEnd,
            latitude,
            longitude
        } > (backend_url + "/people/events/");
        const eventData = event.data;
        setEventsArray(eventData);
        console.log(eventData);
    }


    const [eventName, setEventName] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [date, setDate] = useState('');
    const [maxParticipants, setMaxParticipants] = useState('');
    const [timeStart, setTimeStart] = useState('');
    const [timeEnd, setTimeEnd] = useState('');
    // const [latitude, setLatitude] = useState('');
    // const [longitude, setLongitude] = useState('');

    useEffect(() => {
        const fetchAdminStatus = async () => {
            try {

                const result = await getAdminStatus(user.email);
                setIsAdmin(result.admin); // Assuming `result` contains `admin` field
            } catch (error) {
                console.error('Failed to fetch admin status:', error);
            }
        };

        fetchAdminStatus(); // Call the async function
    }, [user]); // Empty dependency array to run only on mount


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

    const sendEventToBackend = () => {

        if (!isAuthenticated) {
            return
        }
        const email = user.email
        const eventData = {
            eventName,
            description,
            tags,
            date,
            maxParticipants,
            email,
            timeStart,
            timeEnd,
            latitude,
            longitude

        };

        setEventName("");
        setDescription("");
        setTags("");
        setDate("");
        setMaxParticipants("");
        setTimeStart("");
        setTimeEnd("");
        setLatitude("");
        setLongitude("");

        axios.post(backend_url + "/create-event", eventData, {
            withCredentials: true,  // Sends credentials like cookies if needed
            headers: {
                'Content-Type': 'application/json'  // Ensure the headers are correct
            }
        }).then(res => {
            console.log(res)
        })
    }

    // New removeMarker function
    const removeMarker = (indexToRemove) => {
        setMarkers(markers.filter((_, index) => index !== indexToRemove));
    };

    useEffect(() => {
        axios.get(backend_url + "/events", {
            withCredentials: true,
        }).then((res) => {
            setUpcomingEvents(res.data);
            console.log(res.data);
        })
    }, [])

    const mapRef = useRef(null);

    const moveToEvent = (lat, lng) => {
        if (mapRef.current) {
            mapRef.current.setView([lat, lng], 15); // Adjust zoom level as needed
        }
    };


    return (
        <>

            <div className="events-overview" id="find-events">
                {isAdmin && <div className="upcoming-events">
                    <h2>Create Event</h2>
                    <div className="forms-container">

                        <label htmlFor="ename">Event Name:</label><br/>
                        <input
                            type="text"
                            id="ename"
                            name="ename"
                            placeholder="Enter the event name"
                            size="32"
                            value={eventName}
                            required
                            onChange={(e) => setEventName(e.target.value)}
                        /><br/>

                        <label htmlFor="description">Event Description:</label><br/>
                        <input
                            type="text"
                            className="description"
                            id="description"
                            name="description"
                            size="32"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        /><br/>

                        <label htmlFor="tags">Tags:</label><br/>
                        <select
                            id="tags"
                            name="tags"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                        >
                            <option value="">Select Type:</option>
                            <option value="Food bank">Food bank</option>
                            <option value="School Event">School Event</option>
                            <option value="Cleanup">Cleanup</option>
                            <option value="Animal Work">Animal Work</option>
                            <option value="Blood Drive">Blood Drive</option>
                            <option value="Misc">Misc</option>
                        </select><br/>

                        <label htmlFor="date">Date:</label><br/>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        /><br/>

                        <label htmlFor="time">TimeStart:</label><br/>
                        <input
                            type="time"
                            id="timeStart"
                            name="timeStart"
                            required
                            value={timeStart}
                            onChange={(e) => setTimeStart(e.target.value)}
                        /><br/>

                        <label htmlFor="time">TimeEnd:</label><br/>
                        <input
                            type="time"
                            id="timeEnd"
                            name="timeEnd"
                            required
                            value={timeEnd}
                            onChange={(e) => setTimeEnd(e.target.value)}
                        /><br/>

                        <label htmlFor="max-participants">Maximum Participants:</label><br/>
                        <input
                            type="text"
                            className="max-participants"
                            id="max-participants"
                            name="max-participants"
                            value={maxParticipants}
                            onChange={(e) => setMaxParticipants(e.target.value)}
                        /><br/>

                        <label htmlFor="exact-location">Location:</label><br/>
                        <div className="marker-inputs">
                            <input
                                type="text"
                                placeholder="Latitude"
                                value={latitude}
                                size="15"
                                onChange={(e) => setLatitude(e.target.value)}
                                disabled
                            />
                            <input
                                type="text"
                                placeholder="Longitude"
                                value={longitude}
                                size="15"
                                onChange={(e) => setLongitude(e.target.value)}
                                disabled
                            />
                            <button
                                type="submit"
                                onClick={() => {
                                    sendEventToBackend()
                                    handleAddMarker()
                                }}
                                className="add-marker-button"
                            >
                                Submit
                            </button>
                        </div>
                        <h6>
                            You must press search, then submit.
                        </h6>
                        <form onSubmit={handleSearchSubmit || handleAddMarker}>
                            <input size="32" ref={searchInputRef} type="text" placeholder="Search for a location"/>
                            <button type="submit">Search</button>
                        </form>

                    </div>
                </div>}
                <div className="nearby-events">
                    <h2>Upcoming Events</h2>
                    <div style={{overflow: 'auto', height: '32rem', width: '100%'}}>

                        {upcomingEvents && upcomingEvents.map((event, index) => (
                            <div className="individual-event" key={index} style={{margin: '5px'}}
                                 onClick={() => moveToEvent(event.latitude, event.longitude)}>
                                <div>
                                    <span>Event: {event.name}</span><br/>
                                    <span>Date: {event.date} ({event.timeStart} - {event.timeEnd})</span><br/>
                                    <span>Description: {event.description} </span><br/>
                                    <span>Location: <br/>lat-{event.latitude}, <br/>long-{event.longitude}</span><br/>

                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>

            <div className="map">
                <MapContainer center={position} zoom={12} scrollWheelZoom={false}
                              style={{height: '100%', width: '100wh'}} whenReady={mapInstance => {
                    mapRef.current = mapInstance;
                }}>
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

        </>
    );
}

export default Map;
