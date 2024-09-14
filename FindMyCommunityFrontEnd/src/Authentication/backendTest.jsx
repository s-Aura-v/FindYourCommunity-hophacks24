import {useAuth0} from "@auth0/auth0-react";
import axios from "axios";

const BackendTest = () => {
    const {user, isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    console.log(user)

    const callApi = async () => {
        try {
            const token = await getAccessTokenSilently();
            console.log(token);

            axios.get('http://localhost:8080/api/public', {
                headers:{
                    Authorization: `Bearer ${token}`,
                },
                credentials:true
            }).then(res => {
                console.log(res.data);
            })
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <h1>Hello this is BackendTest</h1>
            {
                isAuthenticated &&
                <div>
                    <img src={user.picture} alt={user.name}/>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <button onClick={() => callApi()}>Try me</button>
                </div>
            }
        </>

    );
};

export default BackendTest;