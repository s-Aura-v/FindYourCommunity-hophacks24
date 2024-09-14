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
                    <li><a href="#" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Home</a></li>
                    <li><a href="#find-events">Find Events</a></li>
                    <li><a href="#add-event">Add Event</a></li>
                    <li><a href="#about-us">About Us</a></li>
                    <li><a href="#log-in">Log In</a></li>
                </ul>
            </nav>
        </>

    )
}
