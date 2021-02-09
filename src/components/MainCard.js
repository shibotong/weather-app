import React from 'react';
import CityLocation from './uis/CityLocation'
import WeatherView from './uis/WeatherView'
import TimeView from './uis/TimeView'

class MainCard extends React.Component {
    render() {
        return (
        <div className='box main-card'>
            <CityLocation />
            <WeatherView />
            <TimeView />
        </div>
        )
    }
}

export default MainCard