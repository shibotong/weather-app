import React from 'react';

import LeftWeatherDetail from './uis/LeftWeatherDetail';

const LeftContents = ({ weatherData }) => {
    return (
        <div className='left-contents'>
                <LeftWeatherDetail weatherData={weatherData} />
            </div>
    )
}

export default LeftContents;