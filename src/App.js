import React from 'react'

import AirVisual from './api/AirVisual'
import MainCard from './components/MainCard'
import DisplayCard from './components/DisplayCard'



class App extends React.Component {

    state = { data: undefined }
    airvisual = new AirVisual()

    componentDidMount() {
        //this.getWeatherData('Melbourne', 'victoria', 'Australia')
    }

    async getCountryData() {
        const response = await this.airvisual.getAllCountries()
        this.setState({ data: response })
    }

    async getWeatherData(city, state, country) {
        const response = await this.airvisual.getWeatherData(city, state, country)
        this.setState({ weather: response })
        console.log(response)
    }

    render() {
        // if (this.state.weather) {
        //     if (this.state.weather.data.status === 'success'){
                return (<div className='container'>
                    <div className='main'>
                        <MainCard />
                        <div>
                            <DisplayCard />
                            <DisplayCard />
                        </div>
                        <div>
                            <DisplayCard />
                            <DisplayCard />
                        </div>
                        <div>
                            <DisplayCard />
                            <DisplayCard />
                        </div>
                    </div>
                </div>)
        //     } else {
        //         return <div>Loading</div>
        //     }
        // } else {
        //     return <div>Loading</div>
        // }
    }
}

export default App