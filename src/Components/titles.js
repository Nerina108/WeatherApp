//Titles of the weather app

import React from 'react';

class Titles extends React.Component{
    render(){
        return(
            <div>
                <h2 className = "title-container_title">Weather App</h2>
                <p className = "title-container_subtitle">Helps you find weather conditions in cities</p>
            </div>
        )
    }
}

export default Titles;