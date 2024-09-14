import '../styles/profile.css'
export function Profile() {
    return (
        <>
            <div className="profile-container">
                <div>username:</div>
                <div className="user-profile">

                    <h1> FirstName Lastname </h1>
                    <i> Serviced # Events </i>

                    <a href="#home">
                        <img src="src/assets/Profile.webp" alt="FindMyCommunity Logo" className="logo-img"/>
                    </a>
                </div>
                <div className="events-overview">

                </div>
                <div className="map">
                    wino
                </div>
            </div>

        </>
    );
}
