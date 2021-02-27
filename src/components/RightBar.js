import React from 'react';

import LocationChoices from './uis/LocationChoices';
import SearchBar from './uis/SearchBar';
import WeatherDetails from './uis/WeatherDetails';

const RightBar = ({ weatherData, getNewCityData }) => {
    return (
        <div className='right-bar'>
            <div className='fixed'></div>
            <div className='content'>
                <SearchBar getNewCityData={getNewCityData} />
                <div className='divider-container'>
                    <LocationChoices getNewCityData={getNewCityData} />
                    <div className="ui inverted divider"></div>
                    <WeatherDetails currentData={weatherData.current} />
                </div>
            </div>
        </div>
    )
}


export default RightBar;