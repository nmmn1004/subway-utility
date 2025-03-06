import React from "react";
import stationinfo from "../json/stationinfo";

const main = () => {
    console.log(typeof stationinfo);
    return (
        <div>
            <header>
                Subway Utility
            </header>
            <main>
                기준역: <input id="departureStation"></input>
                <br/>

                역명: <input></input>
            </main>
        </div>
        
    );
}

const returnCode = (stationName) => {
    
}

export default main;