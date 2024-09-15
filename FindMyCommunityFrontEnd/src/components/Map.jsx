import {useRef, useState} from 'react';
import {Icon} from "leaflet";
import MarkerSVG from "../assets/marker.svg";
import {OpenStreetMapProvider} from "leaflet-geosearch";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

function Map() {
    const position = [40.7826, -73.9656];
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [markers, setMarkers] = useState([]);

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
    ;

    // New removeMarker function
    const removeMarker = (indexToRemove) => {
        setMarkers(markers.filter((_, index) => index !== indexToRemove));
    };
    return (
        <>
            <div className="events-overview" id="find-events">
                <div className="upcoming-events">
                    <h2>Create Event</h2>
                    <div className="forms-container">
                        <form>
                            <label htmlFor="ename">Event Name:</label><br/>
                            <input type="text" id="ename" name="ename" placeholder="Enter the event name "
                                   size="32"/><br/>

                            <label htmlFor="description">Event Description:</label><br/>
                            <textarea id="description" name="description" rows="5" cols="32"/><br/>

                            <label htmlFor="tags">Tags:</label><br/>
                            <select>
                                <option value="0">Select Type:</option>
                                <option value="1">Food Bank</option>
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
                            </div>
                        </form>
                        {/* Search form */}
                        <form onSubmit={handleSearchSubmit || handleAddMarker}>
                            <input size="32" ref={searchInputRef} type="text" placeholder="Search for a location"/>
                            <button type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <div className="nearby-events">
                    <h2>Upcoming Events</h2>
                    <div className="individual-event">
                        <div>
                            <span>Event: </span><br/>
                            <span>Date: </span><br/>
                            <span>Time: </span>
                        </div>
                        <div>
                            Remove
                        </div>
                    </div>
                    <div className="individual-event">
                        <div>
                            <span>Event: </span><br/>
                            <span>Date: </span><br/>
                            <span>Time: </span>
                        </div>
                        <div>
                            Remove
                        </div>
                    </div>
                    <div className="individual-event">
                        <div>
                            <span>Event: Testing</span><br/>
                            <span>Date: </span><br/>
                            <span>Time: </span>
                        </div>
                        <div>
                            Remove
                        </div>
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

        </>
    );
}

export default Map;
