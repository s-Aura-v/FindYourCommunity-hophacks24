import React, { useState, useEffect } from 'react';
import '../styles/InfoBarStyle.css';

export function InfoBar() {
    const [isVisible, setIsVisible] = useState(false);

    // Check sessionStorage on component mount
    useEffect(() => {
        // Check if the info bar has been closed during this session
        const isInfoBarClosed = sessionStorage.getItem('infoBarClosed');

        // If it hasn't been closed, show the info bar
        if (!isInfoBarClosed) {
            setIsVisible(true);
        }
    }, []);

    // Function to close the info bar and store the state in sessionStorage
    const closeInfoBar = () => {
        setIsVisible(false); // Hide the info bar
        sessionStorage.setItem('infoBarClosed', 'true'); // Store the closed state in sessionStorage
    };

    return (
        <>
            {/* Info bar that appears unless closed in this session */}
            {isVisible && (
                <div id="info-bar" className="info-bar-visible">
                    <p>Welcome to FindMyCommunity! New to our Website?</p>
                    <button id="close-info-bar" onClick={closeInfoBar}>
                        Close
                    </button>
                </div>
            )}
        </>
    );
}