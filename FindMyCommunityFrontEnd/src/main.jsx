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
                clientId="HcmIF3V5dzlg2y5N6sQ59kh6PQnhi5uA" // Your client ID
                authorizationParams={{
                    redirect_uri: "http://localhost:5173/logout", // Your app's redirect URI
                }}
            >
                <App />
            </Auth0Provider>
        </BrowserRouter>
    </StrictMode>
)
