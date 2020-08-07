import React, { useEffect, useState } from 'react';
import axios from '../../axios-config';

import DetailCountryShow from './DetailCountryShow'

const CountryDetail = props => {

    const countryName = props.match.params.country;  // Gets the country name via query param

    const [countryData, setCountryData] = useState(undefined);
    

     useEffect(() => {
       axios.get(`name/${countryName}`)
        .then(res => {


            // name : country['name'],
            // nativeName: country['nativeName'],
            // population: country['population'],
            // region: country['region'],
            // subRegion: country['subregion'],
            // capital: country['capital'],
            // topLevelDomain: country['topLevelDomain'],
            // currencies: country['currencies'][0]['name'],
            // languages: country['languages']


            setCountryData(res.data[0])
        
           

        }).catch(e => {
            setCountryData(null)
        })
    }, [])

    let showData;

    if(countryData) {
        showData = <DetailCountryShow
                    isDark={props.isDark}
                    flag={countryData.flag}  
                    name={countryData.name}
                    nativeName={countryData.nativeName}
                    population={countryData.population}
                    region={countryData.region}
                    subRegion={countryData.subregion}
                    capital={countryData.capital}
                    topLevelDomain={countryData.topLevelDomain}
                    currencies={countryData.currencies}
                    languages={countryData.languages}
                    />
    } else {
        showData = <h1>Loading...</h1>
    }

    return (
        <div>
            {showData}
        </div>
    );
};

export default CountryDetail;