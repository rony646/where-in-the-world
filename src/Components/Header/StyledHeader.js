import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    color: hsl(200, 15%, 8%);
    align-items: center;
    padding: 0 50px;
    justify-content: space-between;
    max-width: 100%;
    height: 90px;
    background-color:  hsl(0, 0%, 100%);
    box-shadow: 1px 1px 10px hsl(207, 26%, 17%);
    > h1 {
        font-size: 25px;
    }
    @media(max-width: 600px) {
        height: 75px;
        > h1 {
            font-size: 17px;
        }
        padding: 0 15px;
    }
`;

export default StyledHeader;