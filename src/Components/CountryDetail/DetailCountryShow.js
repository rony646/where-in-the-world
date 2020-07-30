import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    margin: 30px auto;
    position: relative;
    background: blue;
    height: 500px;
    width: 80%;
`

const DetailCountryShow = props => {
    return(
        <div>
            <Container>
                <div style={{backgroundColor: "green", height: "80px"}}>a</div>
                <div>b</div>
            </Container>
        </div>
       
    )
};

export default DetailCountryShow;