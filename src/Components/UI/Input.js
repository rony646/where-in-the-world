import React from 'react';

import styled from 'styled-components';

const StyledInput = styled.input`
    background: inherit;
    color: inherit;
    font-family: inherit;
    margin-left: 35px;
`

const Input = props => {
    return(
        <StyledInput type="text" placeholder="search for a country..." name="country" onChange={e => props.changed(e)}/>
    )
};


export default Input;