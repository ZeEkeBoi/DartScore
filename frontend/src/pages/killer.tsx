import KillerMain from "../components/KillerMain";
import { MainToolbar } from "../components/ToolBar";
import React from "react";

export const Killer = () => {
    return (
        <>
        <MainToolbar
        leftIcon={<h3>Left</h3>}
        rightIcon={<h3>Right</h3>}
        middleContent={<h1>Killer</h1>}
        />
        <KillerMain />
        <div>
            <h1>Killer 22</h1>
        </div>
        </>
    );
};

export default Killer;