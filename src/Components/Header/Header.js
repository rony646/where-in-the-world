import React from 'react';
import styled from 'styled-components'

import  '../../../node_modules/font-awesome/css/font-awesome.min.css'

import StyledHeader from './StyledHeader'



const Header = props => {
    const icon = "fa fa-moon-o"
    return (
        <StyledHeader>
            <h1>Where in the World?</h1>
            <div onClick={() => alert('3')}>
                 <span className={icon} style={{marginRight: '10px'}}></span>
                 <span>Dark Mode</span>
            </div>
        </StyledHeader>
    )
};

export default Header;