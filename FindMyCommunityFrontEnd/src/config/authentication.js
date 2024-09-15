import axios from "axios";
import {backend_url} from "./constants.js";


export const handleGlobalLogin = (callback) => {
    callback();
    console.log(userData);
    if (userData) {return}
    axios.post(backend_url + "/auth/checkUser", userData, {
        withCredentials: true,  // Sends credentials like cookies if needed
        headers: {
            'Content-Type': 'application/json'  // Ensure the headers are correct
        }
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err);
    })
}

export const getAdminStatus = async (userEmail) => {
    try {
        const response = await axios.post(backend_url + '/auth/getAdminStatus', { userEmail }, {
            withCredentials: true, // Include credentials like cookies (if needed)
        });
        return response.data; // Return the data directly
    } catch (error) {
        // Handle any errors that occur during the request
        console.error("Error fetching admin status:", error);
        throw error;
    }
};

