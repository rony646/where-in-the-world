import React from 'react';
import { Link } from 'react-router-dom'

import styled from 'styled-components';

import Card from './Country/Country'

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px 0px;
    flex-wrap: wrap;
    font-size: inherit;

    @media (max-width: 600px) {
        justify-content: unset;
        align-items: center;
        flex-direction: column;
    }
`

const Countries = props => {

    console.log('[Countries.js]', props)

    const countries = props.countryData.map(country => {
       return  <Link  key={country.name} to={`/country/${country.name}`} style={{color: "inherit", textDecoration: "none"}}>
                    <Card 
                    name={country.name}
                    population={country.population}
                    capital={country.capital}
                    region={country.region}
                    flagUrl={country.flag}
                    isDark={props.isDark}/>
               </Link>
    });

    return(
        <StyledDiv>
           {countries}
        </StyledDiv>
    );
};

export default Countries;