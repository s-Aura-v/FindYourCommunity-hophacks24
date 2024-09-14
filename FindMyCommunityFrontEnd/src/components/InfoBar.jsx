import React, { useState, useEffect } from 'react';
import '../styles/InfoBarStyle.css'

export function InfoBar() {
    const [isVisible, setIsVisible] = useState(false);

    // Function to detect when the user scrolls to the bottom
    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;

            if (scrollTop + clientHeight >= scrollHeight - 50) {
                // Show the info bar when the user reaches the bottom
                setIsVisible(true);
            }
        };

        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to close the info bar
    const closeInfoBar = () => {
        setIsVisible(false);
    };
    return (
        <>
            {/* Info bar that appears when the user scrolls to the bottom */}
            {isVisible && (
                <div id="info-bar" className="info-bar-visible">
                    <p>This is the info bar with more details!</p>
                    {/*<button id="close-info-bar" onClick={closeInfoBar}>
                        Close
                    </button>*/}
                </div>
            )}
        </>

    )

}