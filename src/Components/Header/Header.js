import React from 'react';

import  '../../../node_modules/font-awesome/css/font-awesome.min.css'

import StyledHeader from './StyledHeader'



const Header = props => {
    const icon = props.isDark ? "fa fa-sun-o" :  "fa fa-moon-o"
    return (
        <StyledHeader isDark={props.isDark}>
            <h1>Where in the World?</h1>
            <div onClick={props.clicked} style={{userSelect: "none", fontWeight: "bold"}}>
                 <span className={icon} style={{marginRight: '10px'}}></span>
                 <span>{props.isDark ? "Light Mode" : "Dark Mode"}</span>
            </div>
        </StyledHeader>
    )
};

export default Header;