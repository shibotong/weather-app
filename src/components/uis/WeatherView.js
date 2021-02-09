import React from 'react'

class WeatherView extends React.Component {
    render() {
        return (
            <div className='column-center'>
                <img className='weather' src='./img/weather/001-sunny.png' alt='weather' />
                <h1>24</h1>
                <h3 className="center-text">Sunny</h3>
            </div>
        )
    }
}

export default WeatherView