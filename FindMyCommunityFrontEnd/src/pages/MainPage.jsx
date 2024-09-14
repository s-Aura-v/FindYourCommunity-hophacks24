import {NavigationBar} from "../components/NavigationBar.jsx";
import {Profile} from "../components/Profile.jsx";
import {AboutUs} from "../components/AboutUs.jsx";
import '../styles/main.css'

export function MainPage() {
    return (
        <>
            <NavigationBar/>
            <div className="main-page">
                <div id="home" className="section">
                    <Profile/>
                </div>
                <div id="about-us" className="section">
                    <AboutUs/>
                </div>

            </div>

        </>
    )
}
