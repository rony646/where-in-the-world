import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    color: ${props => props.isDark ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
    position: relative;
    z-index: 200;
    align-items: center;
    padding: 0 50px;
    justify-content: space-between;
    max-width: 100%;
    height: 90px;
    background:  ${props => props.isDark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 98%)"};
    box-shadow: ${props => props.isDark ?  "1px 1px 10px hsl(0, 0%, 13%)" : "1px 1px 10px hsl(207, 26%, 17%)"};
    transition: all 0.5s;
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