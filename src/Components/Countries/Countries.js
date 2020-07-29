import React from 'react';

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

    const countries = props.countryData.map(country => {
       return  <Card 
                name={country.name}
                population={country.population}
                capital={country.capital}
                region={country.region}
                flagUrl={country.flag}
                isDark={props.isDark}/>
    });

    return(
        <StyledDiv>
           {countries}
        </StyledDiv>
    );
};

export default Countries;