import React from "react";

import '../Styles/Airenmask.css'

import Errorcomponent from "./Errorcomponent";

export default function Arienmask() {
    return (
        <div className="ariencontainer" style={{ paddingBottom: '500px', backgroundColor: 'black' }}>
            <Errorcomponent />
        </div>
    );
}