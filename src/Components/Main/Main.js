import React from 'react'

import styled from 'styled-components'

const StyledDiv = styled.div`
    background: ${props => props.isDark ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"};
    padding: 10px 0px;
    z-index: 100;
    background-size: cover;
    min-height: calc(100vh - 90px);
    min-width: 100%;
    position: relative;
    transition: all 0.5s;

    @media (max-width: 600px) {
        min-height: calc(100vh - 75px);
    }
  `

const Main = props => {

    return(
        <StyledDiv isDark={props.isDark}>
            
        </StyledDiv>
    )
};

export default Main
