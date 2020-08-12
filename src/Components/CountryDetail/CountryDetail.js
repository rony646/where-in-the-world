import React, { useEffect, useState } from 'react';
import axios from '../../axios-config';

import DetailCountryShow from './DetailCountryShow'
import Loader from '../UI/Loader/Loader'

const CountryDetail = props => {

    const countryName = props.match.params.country;  // Gets the country name via query param

    const [countryData, setCountryData] = useState(undefined);
    

     useEffect(() => {
       axios.get(`name/${countryName}`)
        .then(res => {
            setCountryData(res.data[0])
        
        }).catch(e => {
            setCountryData(null)
        })
    }, [countryName])

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
                    borders={countryData.borders}
                    />
    } else {
        showData = <Loader isDark={props.isDark} />
    }

    console.log('COUNTRY DATA', countryData)

    return (
        <div>
            {showData}
        </div>
    );
};

export default CountryDetail;