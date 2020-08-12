import React from 'react';

import './Loader.css'

const Loader = props => {

    const loaderColor = props.isDark ? "white" : "black"

    return (
            <div style={{display: "flex", flexDirection: "column",justifyContent: "center", alignItems: "center", width: "100vw", height: "80vh"}}>
            <div className="spinner">
                <div className="bounce1" style={{backgroundColor: loaderColor}}></div>
                <div className="bounce2" style={{backgroundColor: loaderColor}}></div>
                <div className="bounce3" style={{backgroundColor: loaderColor}}></div>
            </div>
            <p style={{color: props.isDark ? "white" : "black", fontSize: "20px"}}>Loading...</p>
            </div>
        )
};

export default Loader;