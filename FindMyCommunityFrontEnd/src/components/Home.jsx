// Home.jsx

import {useAuth0} from "@auth0/auth0-react";

function Home() {

    const {isAuthenticated, user} = useAuth0();

    console.log(user)

    return (
        <div>
            {isAuthenticated ? <h1>{user.name}</h1> : <h2>Yeaaa you are not login</h2>}
        </div>
    );
}

export default Home;