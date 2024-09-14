import {useAuth0} from "@auth0/auth0-react";

const LogoutButton = () => {
    const {logout, isAuthenticated, user} = useAuth0();
    console.log(isAuthenticated);
    return (
        <div>
            <h1>Hello wass sup</h1>
            {isAuthenticated && (
                <>
                    {user.name}
                    {user.email}
                    {user.address}
                </>
            )}
            <button onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}>
                Log Out
            </button>
        </div>

    );
};

export default LogoutButton;