import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    margin: 30px auto;
    position: relative;
    /* background: blue; */
    height: 500px;
    width: 80%;

    @media(max-width: 600px) {
        min-height: 600px;
    }
`

const DetailContainter = styled.div`
    display: flex;
    align-items: center;
    height: calc(100% - 80px);
    .info-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        box-sizing: border-box;
        padding: 0 80px;
        height: 340px;
        width: 50%;
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
        }

        > img {
            height: 53%;
            width: 100%;
        }
        
    }
    

`

const DetailCountryShow = props => {

    console.log('Detail Country', props)

    return(
        <div>
            <Container style={{color: props.isDark ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"}}>
                <div style={{backgroundColor: "green", height: "60px"}}>
                    <button>Back</button> {/* Must style this button later!*/}
                </div>
                <DetailContainter>
                    <img src={props.flag} />
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
                                <span><strong>Top Level Domain: </strong> {props.topLevelDomain}</span>
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
                        <div>
                            borders
                        </div>
                    </div>
                </DetailContainter>
            </Container>    
        </div>
       
    )
};

export default DetailCountryShow;