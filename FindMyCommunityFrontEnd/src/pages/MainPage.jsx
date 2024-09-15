import {NavigationBar} from "../components/NavigationBar.jsx";
import {Profile} from "../components/Profile.jsx";
import {AboutUs} from "../components/AboutUs.jsx";
import '../styles/main.css'
import {InfoBar} from "../components/InfoBar.jsx";
import {Footer} from "../components/Footer.jsx";

export function MainPage() {
    return (
        <>
            <div className="section"></div>
            <NavigationBar/>

            <div className="main-page">

                <div id="home" className="section">
                    <Profile/>
                </div>
                <div id="about-us" className="section">
                    <AboutUs/>
                </div>

            </div>
            <Footer/>
            <InfoBar/>
        </>
    )
}
