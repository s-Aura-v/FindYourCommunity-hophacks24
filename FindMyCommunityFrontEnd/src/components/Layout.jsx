// Home.jsx

import {Link, Outlet} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";

function Layout() {
    const {logout, user, isAuthenticated, loginWithRedirect} = useAuth0();

    return (
        <div>
            {/*<button onClick={() => loginWithRedirect()}>Log In</button>*/}
            {isAuthenticated ? (
                <>
                    <h1>{user.name}
                    </h1>
                    <h2>{user.email}</h2>
                    <button onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}>
                        Log Out
                    </button>
                </>
            ) : (
                <>
                    <button onClick={() => loginWithRedirect()}>Log In</button>
                </>
            )}
            {/* Outlet will render the child routes */}
            <Outlet/>
        </div>
    )
}

export default Layout;