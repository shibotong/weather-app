import React from 'react';

const LocationChoices = ({ getNewCityData }) => {
    return (
        <div className="desktop-only">
            <ul>
                <li className="city-link" onClick={() => {getNewCityData("London","England","United Kingdom")}}>London</li>
                <li className="city-link" onClick={() => {getNewCityData("Sydney","New%20South%20Wales","Australia")}}>Sydney</li>
                <li className="city-link" onClick={() => {getNewCityData("Tokyo","Tokyo","Japan")}}>Tokyo</li>
                <li className="city-link" onClick={() => {getNewCityData("Beijing","Beijing","China")}}>Beijing</li>
            </ul>
        </div>
    )
}


export default LocationChoices;