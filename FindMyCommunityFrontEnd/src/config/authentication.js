import axios from "axios";
import {backend_url} from "./constants.js";


export const handleGlobalLogin = (callback, userData) => {
    callback();
    const data = userData;
    axios.post(backend_url + "/register_user", data, {
        withCredentials: true,  // Sends credentials like cookies if needed
        headers: {
            'Content-Type': 'application/json'  // Ensure the headers are correct
        }
    }).then(res => {
        console.log(res)
    })
}