import axios from 'axios';

const API_KEY = '966bdcfb-d389-4f07-8805-a9dc6e9baa68'
const url = 'https://api.airvisual.com/v2'

class AirVisual {

    async getAllCountries() {
        const response = await axios.get(`${url}/countries?key=${API_KEY}`).catch((err) => {
            console.log(err);
        });

        return response;
    };

    async getWeatherData(city, state, country) {
        const response = await axios.get(`${url}/city?city=${city}&state=${state}&country=${country}&key=${API_KEY}`)

        return response;
    }
}

export default AirVisual