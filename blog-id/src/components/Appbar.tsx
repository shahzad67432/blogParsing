import { NavLink } from "react-router-dom";
import { Avatar } from "./Avatar";
import { Button } from "./Button";
import '../BlogComp.css'

export const Appbar = () => {
    return (
        <div className="appbar-container">
            <NavLink to={'https://galaxy-mocha-iota.vercel.app/'} className="brand-link">
                <div className="brand-name">Galaxy</div>
            </NavLink>
            <div className="appbar-actions">
                <Button/>
                <Avatar name={"Shahzad"} size={36} fontWeight="bold"/>
            </div>
        </div>
    );
};
