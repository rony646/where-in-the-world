import React from 'react';

const Loader = props => {
    return (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "80vh"}}>
                <h1 style={{color: props.isDark ? "white" : "black"}}>Loading from loader.js...</h1>
            </div>
        )
};

export default Loader;