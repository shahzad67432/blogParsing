import { Link } from "react-router-dom";

export const Button = () => {
    const buttonStyle = {
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
        paddingright: "10px",
        fontFamily:"sans-serif"
    };

    const buttonHoverStyle = {
        backgroundColor: "#15803c",
    };

    return (
        <>
            <div style={{paddingRight:"20px"}}>
                <Link to={'/publish'} style={{ ...buttonStyle, ...buttonHoverStyle, fontSize:"15px"}}>
                 Publish
                </Link>
            </div>
        </>
    );
};
