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