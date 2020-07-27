import React from 'react'

import Countries from '../../Components/Countries/Countries'
import Input from '../../Components/UI/Input'
import Select from '../../Components/UI/Select'

import styled from 'styled-components'

const StyledDiv = styled.div`
    background: ${props => props.isDark ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"};
    color: ${props => props.isDark ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
    padding: 10px 0px;
    z-index: 100;
    background-size: cover;
    min-height: calc(100vh - 90px);
    min-width: 100%;
    max-width: 100vw;
    position: relative;
    transition: all 0.5s;

    @media (max-width: 600px) {
        min-height: calc(100vh - 75px);
    }
  `

const InputsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    padding: 20px 0px;

    @media (max-width: 600px) {
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
    }
`


const Main = props => {

    function InputChangeHandler(event) {
        console.log(event.target.value)
    }

    return(
        <StyledDiv isDark={props.isDark}>
            <InputsContainer>
                <Input changed={InputChangeHandler} isDark={props.isDark}/>
                <select style={{marginRight: "35px"}} name="continents" onChange={(event) => InputChangeHandler(event)}>
                    <option value="africa">Africa</option>
                    <option value="americas">Americas</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </InputsContainer>
            <Countries />
        </StyledDiv>
    )
};

export default Main
