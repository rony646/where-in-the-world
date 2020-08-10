import React from 'react'

import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import '../../../node_modules/font-awesome/css/font-awesome.min.css'


const BackButton = styled.button`
    font-family: inherit;
    border-radius: 3px;
    font-weight: 600;
    text-align: left;
    border: none;
    box-shadow: 1px 1px  4px hsl(207, 26%, 17%);
    height: 35px;
    width: 120px;
    transition: all 0.3s;

    &:hover, &:active {
        box-shadow: 3px 3px 10px #3b5064;
        font-size: 15px;
    }
`
const Container = styled.div`
    margin: 30px auto;
    position: relative;
    min-height: 80vh;
    width: 80%;

    .btn-container {
        display: flex;
        align-items: center;
    }

    @media(max-width: 600px) {
        min-height: 600px;
    }
`

const DetailContainter = styled.div`
    display: flex;
    align-items: center;
    /* background-color: green; */
    height: 100%;
    .info-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        box-sizing: border-box;
        padding: 0 80px;
        height: 340px;
        width: 50%;
        > .border-countries {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            width: 100%;
            > .borders {
                span {
                    display: inline-block;
                    box-shadow: 1px 1px  4px hsl(207, 26%, 17%);
                    font-weight: 600;
                    box-sizing: border-box;
                    padding: 5px;
                    margin: 3px;
                    height: 30px;
                    width: 80px;
                }
            }
        }
        > .details-container {
            display: flex;
            position: relative;
            font-size: 14px;
            p {
                display: inline-block;
                padding: 0 15px 0 0;
                > span {
                    padding: 5px 0;
                    text-align: left;
                    display: block
                }
            }
        }
    }

    > img {
        height: 340px;
        width: 50%;
    }

   

    @media(max-width: 600px) {
        flex-direction: column;

        .info-container {
            width: 100%;
            padding: 0 15px;
            .details-container {
                display: flex;
                flex-direction: column;

            }
        }

        > img {
            height: 180px;
            width: 300px;
        }
        
    }
    

`

const DetailCountryShow = props => {

    console.log('Detail Country', props)

    function goBackHandler() {
        props.history.push('/')
    }

    const bgElementColor = props.isDark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)";
    const fontColor=  props.isDark ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)";

    return(
        <div>
            <Container style={{color: props.isDark ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"}}>
                <div style={{height: "60px"}} className="btn-container">
                    <BackButton onClick={goBackHandler} style={{backgroundColor: bgElementColor, color: fontColor}}>
                        <span className="fa fa-arrow-left" style={{padding: "0 8px"}}></span>Back
                    </BackButton> {/* Must style this button later!*/}
                </div>
                <DetailContainter>
                    <img src={props.flag} alt="country flag"/>
                    <div className="info-container">
                        <h1>{props.name}</h1>
                        <div className="details-container">
                            <p>
                                <span><strong>Mative Name: </strong>{props.nativeName}</span> 
                                <span><strong>Population: </strong>{props.population}</span> 
                                <span><strong>Region: </strong>{props.region}</span> 
                                <span><strong>Sub Region: </strong>: {props.subRegion}</span> 
                                <span><strong>Capital: </strong> {props.capital}</span> 
                            </p>
                            <p>
                                <span><strong>Top Level Domain: </strong> {props.topLevelDomain.join(', ')}</span>
                                <span><strong>Currencies: </strong> 
                                    {props.currencies.map(curr => {
                                        return curr.name
                                    }).join(', ')}
                                </span>
                                <span>
                                    <strong>Languages: </strong> {
                                        props.languages.map(lang => {
                                            return lang.name
                                        }).join(', ') // Looking through the language array and showing it correctly
                                    }
                                </span>
                            </p>
                        </div>
                        <div className="border-countries">
                            <h4>Border Countries: </h4>
                            <div className="borders">
                                {props.borders.map(country => {
                                    return <span  key={country} style={{backgroundColor: bgElementColor}}>{country}</span>
                                })}
                            </div>
                        </div>
                    </div>
                </DetailContainter>
            </Container>    
        </div>
       
    )
};

export default withRouter(DetailCountryShow);