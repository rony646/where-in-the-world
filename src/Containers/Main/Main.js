import React, { useState, useEffect } from 'react'

import Countries from '../../Components/Countries/Countries'
import Input from '../../Components/UI/Input'
import Select from '../../Components/UI/Select'
import Loader from '../../Components/UI/Loader/Loader'

import styled from 'styled-components'
import axios from '../../axios-config'

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
    transition: none;

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


    let [countries, setCountries] = useState(null);

    useEffect(() => {

        axios.get('/all')
        .then(res => {
            const data = []
            res.data.forEach(e => {
                const countryData = {
                    name: e["name"],
                    capital: e["capital"],
                    region: e["subregion"],
                    population: e["population"],
                    flag: e["flag"]
                };

                data.push(countryData);
            })
            setCountries(data)
        })
        .catch(err => {
            alert('Something went wrong')
        })
    }, [])

    function fetchResults(query) {
       if(query !== '') {
        axios.get(`name/${query}`)
        .then(res => {
            const data = []
            res.data.forEach(e => {
                const countryData = {
                    name: e["name"],
                    capital: e["capital"],
                    region: e["subregion"],
                    population: e["population"],
                    flag: e["flag"]
                };

                data.push(countryData);
            })
            setCountries(data)
        })
       } else {
           return null;
       }
    }

    function fetchResultsByRegion(query) {
        const filterQuery = query === 'world' ? '/all' : `/region/${query}`

        axios.get(filterQuery)
        .then(res => {
            const data = []
            res.data.forEach(e => {
                const countryData = {
                    name: e["name"],
                    capital: e["capital"],
                    region: e["subregion"],
                    population: e["population"],
                    flag: e["flag"]
                };

                data.push(countryData);
            })
            setCountries(data)
        })
    }

   

    function InputChangeHandler(event) {
        fetchResults(event.target.value)
    }

    function SelectChangeHandler(event) {
        fetchResultsByRegion(event.target.value)
    }

    return(
        <StyledDiv isDark={props.isDark}>
            <InputsContainer>
                <Input changed={InputChangeHandler} isDark={props.isDark}/>
                <Select changed={SelectChangeHandler} isDark={props.isDark}/>
            </InputsContainer>
            {countries ? <Countries isDark={props.isDark} countryData={countries}/> : <Loader isDark={props.isDark}/>}
        </StyledDiv>
    )
};

export default Main
