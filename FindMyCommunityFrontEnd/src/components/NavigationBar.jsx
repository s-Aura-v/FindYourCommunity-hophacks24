import '../styles/NavigationBarStyle.css'
export function NavigationBar() {
    return (
        <>
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
                </ul>
            </nav>
        </>

    )
}
