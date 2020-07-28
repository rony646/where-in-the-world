import React from 'react';

import styled from 'styled-components';
import  '../../../node_modules/font-awesome/css/font-awesome.min.css'

const StyledInput = styled.input`
    color: inherit;
    font-family: inherit;
    border: none;
    outline: none;
    padding-left: 15px;
`

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 0px 10px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px hsl(0, 0%, 13%);
    margin-left: 35px;
    width: 300px;
    height: 45px;


    @media (max-width: 600px) {
        width: 80%;
        margin-left: 0;
    }
`

const Input = props => {

    const color = props.isDark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 98%)" // Alternating bg color here cause it didn't work in styled components

    return(
        <StyledDiv style={{backgroundColor: color}}>
            <span className="fa fa-search"></span>
            <StyledInput 
                type="text" 
                placeholder="Search for a country..." 
                name="country"
                onChange={e => props.changed(e)}
                style={{backgroundColor: color}}>
            </StyledInput>
        </StyledDiv>
        
    )
};


export default Input;