import React from 'react';

import styled from 'styled-components'

const Card = styled.div`
    position: relative;
    text-align: left;
    height: 355px;
    width: 240px;
    margin: 35px 37px;
    box-shadow: 1px 1px 5px black;
    border-radius: 5px;
    > img {
        width: 100%;
        height: 50%;
    }
    > p {
        position: relative;
        display: block;
        top: -5px;
        font-size: 14px;
        padding: 0px 32px;
        text-align: left;
    }

    > p > span  {
        display: inline-block;
        margin: 6px 0px;
    }

    > h1 {
        padding-left: 32px;
        font-size: 18px;
    }

    @media(max-width: 600px) {
        margin: 20px 0;
    }
`

const Country = props => {
    const color = props.isDark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 98%)"

    return(
        <Card style={{backgroundColor: color}}>
            <img src={props.flagUrl} alt="flag" />
            <h1>{props.name}</h1>
            <p>
                <span><strong>Population : </strong>{props.population}</span><br></br>
                <span><strong>Region : </strong>{props.region}</span><br></br>
                <span><strong>Capital : </strong>{props.capital}</span>
            </p>
        </Card>
    );
};

export default Country;