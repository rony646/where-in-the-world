import React from 'react';

import styled from 'styled-components';

const StyledSelect = styled.select`
    margin-right: 35px;
`

const Select = props => {
    return(
        <StyledSelect>
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