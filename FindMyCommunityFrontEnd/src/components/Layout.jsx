// Home.jsx

import {Link, Outlet} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import Login from "../Authentication/login.jsx";

function Layout() {
    const {loginWithRedirect} = useAuth0();

    return (
        <div>
            {/*<button onClick={() => loginWithRedirect()}>Log In</button>*/}
            <Link to="/login">LinkToLogin</Link>
            {/* Outlet will render the child routes */}
            <Outlet/>
        </div>
    )
}

export default Layout;