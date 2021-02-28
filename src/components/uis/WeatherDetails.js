import React from 'react'

const WeatherDetails = ({ currentData }) => {

    const getWindDirection = (degree) => {

        if (degree == 0) {
            return "N"
        }
        if (degree > 0 && degree < 90) {
            return `NE ${degree}°`
        }
        if (degree == 90) {
            return "E"
        }
        if (degree > 90 && degree < 180) {
            return `SE ${180 - degree}°`
        }
        if (degree == 180) {
            return "S"
        }
        if (degree > 180 && degree < 270) {
            return `SW ${degree - 180}°`
        }
        if (degree == 270) {
            return "W"
        }
        if (degree > 270 && degree < 360) {
            return `NW ${360 - degree}°`
        }

        return "--"
    }

    return (
        <div>
            <h1 className="section-title">Weather Details</h1>
            <ul>
                <li><label className="left-label">Pressure</label><label className="right-label">{currentData.weather.pr} hPa</label></li>
                <li><label className="left-label">Humidity</label><label className="right-label">{currentData.weather.hu}%</label></li>
                <li><label className="left-label">Wind Speed</label><label className="right-label">{currentData.weather.ws} m/s</label></li>
                <li><label className="left-label">Wind Direction</label><label className="right-label">{getWindDirection(currentData.weather.wd)}</label></li>
                <li><label className="left-label">AQI US</label><label className="right-label">{currentData.pollution.aqius}</label></li>
                <li><label className="left-label">AQI CN</label><label className="right-label">{currentData.pollution.aqicn}</label></li>
            </ul>
        </div>
    )
}

export default WeatherDetails;