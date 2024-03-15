import React from 'react';
import { Link } from 'react-router-dom';

export const Button = () => {
    const buttonStyle: React.CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "none",
        outline: "none",
        textDecoration: "none",
        marginRight: "5px",
        backgroundColor: "#15803c",
        color: "#ffffff",
        padding: "0.5rem 1rem",
        fontSize: "1.5rem",
        borderRadius: "9999px",
        fontWeight: "500",
        textAlign: "center",
        transition: "background-color 0.3s",
        paddingRight: "10px", // Corrected property name
        fontFamily: "sans-serif"
    };

    const buttonHoverStyle: React.CSSProperties = {
        backgroundColor: "#15803c",
    };

    return (
        <div style={{ paddingRight: "20px" }}>
            <Link to={'/publish'} style={{ ...buttonStyle, ...buttonHoverStyle, fontSize: "15px" }}>
                Publish
            </Link>
        </div>
    );
};
