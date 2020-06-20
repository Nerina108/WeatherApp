//App.js - main component of the weather app, all sub components are called here to form the weather app.
//The weather app will ask the user to type in a city and country and it will return details on the weather conditions in that area

import React from 'react';
import './App.css';
import 'isomorphic-fetch';

//import sub-components
import Titles from './Components/titles';
import Form from './Components/form';
import Weather from './Components/weather';

//API key declared as constant
const Api_Key = "8d5b9c53633e02fb372a7bb8bd8a130f";

class App extends React.Component {

  //states declared as undefined
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  //promise used to get details
  getWeather = async (e) =>{

    //city and country declared as const
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    //prevent errors
    e.preventDefault();
    //API call using fetch to access relevant information - set as const for easy access
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    const response = await api_call.json();
    console.log(response);

    //If both inputs are found, information is returned and stored.
    if (city && country){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    } 
    //If either one or both inputs are not found, error message "Please input seach values is returned"
    else {
      this.setState({
        error: "Please input search values."
      })
    }
  }

  //render and return section calls all components and where necessary passes the relevant information.

  render(){
    return(
      <div className = "app">
        <div className= "main">
          <div className = "container">
            <div className = "row">
              <div className = "col-xs-5 title-container">
                <Titles />
              </div>
              <div className = "col-xs-7 form-container">
                <Form loadWeather={this.getWeather} />
                <Weather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
