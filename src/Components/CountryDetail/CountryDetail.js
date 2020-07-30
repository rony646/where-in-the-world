import React from 'react'

const CountryDetail = props => {
    console.log(props)
    return (
        <div>
            <h1>I will show the details of a country called: {props.match.params.country}</h1>
        </div>
    );
};

export default CountryDetail;