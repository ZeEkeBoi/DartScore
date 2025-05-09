import React from "react";
import { NavLink } from "react-router";
import Scorebutton from "../components/Scorebutton";
import KillerButton from "../components/KillerButton";


export const Menu = () => {
    return (
        <div>
            <h1>DartScore</h1>
            <NavLink to="/501"><h2>501</h2></NavLink>
            <NavLink to="/killer"><h2>Killer</h2></NavLink>            
            <Scorebutton team="A" score={20} onClick={() => {}} />
            <KillerButton team="B" score={20} onClick={() => {}} />
        </div>
    );
};

export default Menu;