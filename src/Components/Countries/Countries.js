import React from 'react';

import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px 35px;
    flex-wrap: wrap;
    font-size: inherit;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

const Countries = props => {
    return(
        <StyledDiv>
            <div>
                <span>Country Img</span>
                <p>Coutry description</p>
            </div>
        </StyledDiv>
    );
};

export default Countries;