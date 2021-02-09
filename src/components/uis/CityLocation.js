import React from 'react';

const CityLocation = () => {
    const country = 'Australia'
    const state = 'Victoria'
    const city = 'Melbourne'

    return (
        <div className="main center-item">
            <img className="country-flag" src={`./img/country/${country.toLowerCase()}.png`} alt={`${country} flag`} />
            <div>
                <h1>{city}</h1>
                <p>{state}, {country}</p>
            </div>
        </div>
    )

}

export default CityLocation