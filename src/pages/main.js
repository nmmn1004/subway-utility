import React from "react";
import stationinfo from "../json/stationinfo";
import { useState } from "react";



const Main = () => {
    const [ stationName, setName ] = useState('');

    const searchStation = e => {
        setName(e.target.value);
    }

    const viewStation = () => {
        const station = stationinfo.DATA.find(item => item.station_nm === stationName);
        return station ? <div className="resultContainer">{station.station_nm} : <div>{station.station_cd}</div></div> : <div className="resultContainer">검색된 역이 없습니다.</div>;
    };
    
    return (
        <div className="mainContainer">
            <header>
                Subway Utility
            </header>
            <main>
                <div className="inputContainer">
                    <p>역명: </p><input 
                        id="station_nm"
                        type="text"
                        value={stationName}
                        onChange={searchStation}
                        placeholder="역을 제외한 역명 입력"
                    />
                </div>
                { viewStation() }
            </main>
        </div>
        
    );
}
// })

export default Main;