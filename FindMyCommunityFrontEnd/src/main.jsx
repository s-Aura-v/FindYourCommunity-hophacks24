import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {Auth0Provider} from "@auth0/auth0-react";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Auth0Provider domain={"dev-jolbzlkuq5zmgdv4.us.auth0.com"} clientId={"on2GRCxFuFnb5enetenrKnz8AlBIsCRQ"}
            authorizationParams={
                {redirect_uri: window.location.origin}
            }>
                <App/>
            </Auth0Provider>
        </BrowserRouter>
    </StrictMode>
)
