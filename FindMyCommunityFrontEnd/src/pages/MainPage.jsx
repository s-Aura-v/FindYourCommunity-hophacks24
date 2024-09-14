import {NavigationBar} from "../components/NavigationBar.jsx";
import {Profile} from "../components/Profile.jsx";
export function MainPage() {
    return (
        <>
            <div>
                <NavigationBar />
                <div id="home" className="section">
                    <h1>Welcome to FindMyCommunity</h1>
                    <Profile />
                </div>

                <div id="find-events" className="section">
                    <h2>Find Events</h2>
                    <p>Here you can search for community service events.</p>
                </div>

                <div id="add-event" className="section">
                    <h2>Add Event</h2>
                    <p>Submit new community service events here.</p>
                </div>

                <div id="about-us" className="section">
                    <h2>About Us</h2>
                    <p>Welcome to the About Us section. Here you can learn more about our mission and team.</p>
                </div>

                <div id="contact" className="section">
                    <h2>Contact</h2>
                    <p>Get in touch with us through this section.</p>
                </div>


            </div>

        </>
    )
}
