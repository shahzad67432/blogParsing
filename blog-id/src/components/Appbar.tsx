import { NavLink } from "react-router-dom";
import { Avatar } from "./Avatar";
import { Button } from "./Button";

export const Appbar = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #e5e7eb", padding: "8px 52px" }}>
            <NavLink to={'https://galaxy-mocha-iota.vercel.app/'} style={{ fontWeight: "thin", fontSize: "1.75rem", display: "flex", justifyContent: "center", cursor: "pointer", textDecoration: "none", color: "#000" }}>
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center", fontFamily:"sans-serif", fontSize:"24px" }}>
                    Galaxy
                </div>
            </NavLink>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <Button/>
                <div >
                    <Avatar name={"Shahzad"} size={36} fontWeight="bold"/>
                </div>
            </div>
        </div>
    );
};
