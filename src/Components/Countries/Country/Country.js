import React from 'react';

import styled from 'styled-components'

const Card = styled.div`
    position: relative;
    text-align: left;
    height: 320px;
    width: 240px;
    margin: 35px 37px;
    box-shadow: 1px 1px 5px black;
    border-radius: 5px;
    > img {
        width: 100%;
        height: 50%;
    }
    > p {
        padding: 0px 32px;
        text-align: left;
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
            <img src="https://upload.wikimedia.org/wikipedia/en/0/0a/Ancap_flag.png" alt="flag" />
            <h1>Brazil</h1>
            <p>
                <strong>Population</strong>: 100.000 <br></br>
                <strong>Region</strong>: World <br></br>
                <strong>Capital</strong>: Anywhere
            </p>
        </Card>
    );
};

export default Country;