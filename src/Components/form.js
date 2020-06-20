//Input form of the weather app
//Informaton is required from the user before anything can be processed, here the form requires the user to input
//both the city and the country and on the submit of the form it will load weather and run the API call to get the relevant information

import React from 'react';

class Form extends React.Component{
    render(){
        return(
            <form onSubmit = {this.props.loadWeather}>
                <input type="text" name="city" placeholder="City"/>
                <input type="text" name="country" placeholder="Country"/>
                <button className="submit">Get Weather</button>
            </form>
        )
    }
}

export default Form;