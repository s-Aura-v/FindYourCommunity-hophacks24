import '../styles/NavigationBarStyle.css'
export function NavigationBar() {
    return (
        <>
            <html lang="en">
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>FindMyCommunity</title>
                <link rel="stylesheet" href="styles.css"/>
            </head>
            <body>
            <nav className="navbar">
                <div className="logo">
                    <a href="#home">
                        <img src="src/assets/FindMyCommunity-.png" alt="FindMyCommunity Logo" className="logo-img"/>
                    </a>
                </div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#find-events">Find Events</a></li>
                    <li><a href="#add-event">Add Event</a></li>
                    <li><a href="#about-us">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div id="home" className="section">
                <h1>Welcome to FindMyCommunity</h1>
                <p>Connecting Volunteers with Opportunities to Make a Difference</p>
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
            </body>
            </html>
        </>

    )
}