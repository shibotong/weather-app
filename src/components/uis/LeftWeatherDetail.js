import React from 'react';


const iconURL = "https://airvisual.com/images/"

const LeftWeatherDetail = ({ weatherData }) => {


    const getIcon = (icon) => {
        if (icon[0] === "1" && icon[1] === "0") {
            return icon
        }
        if (icon[0] === "0" && icon[1] === "1") {
            return icon
        }
        return (icon[0] + icon[1] + "d")
    }

    return (
        <div className="weather-detail-container">
                <div className="weather-detail">
                    <div className="weather-degree">
                        <h1>{weatherData.current.weather.tp}°C</h1>
                    </div>
                    <div className="city-details">
                        <div>
                            <p className="city-name">{weatherData.city}</p>
                        </div>
            
                    </div>
                    <div className="weather-icon">
                        <img src={iconURL + getIcon(weatherData.current.weather.ic) + '.png'} alt={weatherData.current.weather.ic}/>
                    </div>
                </div>
            </div>
    )
}


export default LeftWeatherDetail;