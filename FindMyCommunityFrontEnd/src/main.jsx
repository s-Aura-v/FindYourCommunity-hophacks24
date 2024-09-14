import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {Auth0Provider} from "@auth0/auth0-react";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Auth0Provider
                domain="dev-jolbzlkuq5zmgdv4.us.auth0.com" // Just the domain
                clientId="on2GRCxFuFnb5enetenrKnz8AlBIsCRQ" // Your client ID
                authorizationParams={{
                    redirect_uri: "http://localhost:5173/profile", // Your app's redirect URI
                }}

            >
                <App />
            </Auth0Provider>
        </BrowserRouter>
    </StrictMode>
)
