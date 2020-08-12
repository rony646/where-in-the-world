import React from 'react';

import styled from 'styled-components';

const StyledSelect = styled.select`
    position: relative;
    color: inherit;
    font-weight: 600;
    font-family: inherit;
    font-size: 12px;
    outline: none;
    border: none;
    box-shadow: 1px 1px 5px hsl(0, 0%, 13%);
    border-radius: 5px;
    padding: 0px 10px;
    height: 45px;
    width: 140px;
    right: 35px;
    > option {
        height: 1000000px;
    }

    @media(max-width: 600px) {
        top: 30px;
        left: calc(33% - 50%);
        right: 0px;
        width: 50%;
        align-self: center;
    }
`

const Select = props => {

    const color = props.isDark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 98%)" // Alternating bg color here cause it didn't work in styled components

    return(
        <StyledSelect title="filter by region" name="continents" onChange={event => props.changed(event)} style={{backgroundColor: color}}>
            <option value="world">Filter by region</option>
            <option value="world">World</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </StyledSelect>
    )
};

export default Select;