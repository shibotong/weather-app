import React from 'react'

import AirVisual from './api/AirVisual'
import RightBar from './components/RightBar'
import LeftContents from './components/LeftContents'

const emptyData = {
    "data":{
        "city":"--",
        "state":"--",
        "country":"--",
        "location":{
            "type":"--",
            "coordinates":[0,0]
        },
        "current":{
            "weather":{
                "ts":"--",
                "tp":"--",
                "pr":"--",
                "hu":"--",
                "ws":"--",
                "wd":"--",
                "ic":"03d"
            },
            "pollution":{
                "ts":"--",
                "aqius":"--",
                "mainus":"--",
                "aqicn":"--",
                "maincn":"--"
            }
        }
    }
};

class App extends React.Component {

    state = { weather: emptyData }
    

    componentDidMount() {
        this.getWeatherData('Melbourne', 'victoria', 'Australia')
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
          );
    }

    async getCountryData() {
        const response = await this.airvisual.getAllCountries()
        this.setState({ data: response })
    }

    setEmpty() {
        this.setState({ weather: emptyData })
    }

    getWeatherData = async (city, state, country) => {
        // this.setState({ weather: emptyData })
        const airvisual = new AirVisual()
        const response = await airvisual.getWeatherData(city, state, country)
        this.setState({ weather: response.data })
        this.changebg()
    }

    changebg() {
        const weatherIcon = this.state.weather.data.current.weather.ic
        if (weatherIcon.startsWith("01")) {
            return "url('./img/sunny.jpg')"
        }
        if (weatherIcon.startsWith("02") || weatherIcon.startsWith("03") || weatherIcon.startsWith("04")) {
            return "url('./img/cloudy.jpg')"
        }
        if (weatherIcon.startsWith("09") || weatherIcon.startsWith("10")) {
            return "url('./img/rainy.jpg')"
        }
        if (weatherIcon.startsWith("11")) {
            return "url('./img/thunder.jpg')"
        }
        if (weatherIcon.startsWith("13")) {
            return "url('./img/snowy.jpg')"
        }
        if (weatherIcon.startsWith("50")) {
            return "url('./img/windy.jpg')"
        }
    }

    render() {
        return (<div className='container' >
                
                <div className='container bg' style={{backgroundImage:this.changebg()}}></div>
                <div className='container content'>
                        <LeftContents weatherData={this.state.weather.data}/>
                        <RightBar weatherData={this.state.weather.data} getNewCityData={this.getWeatherData} />
                </div>
            </div>)
    }
}

export default App