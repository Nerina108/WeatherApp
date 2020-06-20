//loads the weather details specific to the area entered into the input field.

import React from 'react';

//loads weather specific conditions specific to the city and country entered in by user.
//temperature loads in kelvin, it is then converted to celcius.
class Weather extends React.Component{
    render(){
        return(
            <div className = "weather">
                {
                    this.props.country && this.props.city && <p className="weather_key">Location:
                    <span className="weather_value"> {this.props.city}, {this.props.country}</span>
                    </p>
                }

                {
                    this.props.temperature && <p className="weather_key">Temperature:
                        <span className="weather_value"> {(this.props.temperature-273.15).toFixed(0)}</span>
                        °C</p>
                }

                {
                    this.props.humidity && <p className="weather_key">Humidity:
                        <span className="weather_value"> {this.props.humidity}</span>
                    </p>
                }

                {
                    this.props.description && <p className = "weather_key">Conditions:
                        <span className="weather_value"> {this.props.description}</span>
                    </p>
                }

                {
                    this.props.error && <p className ="weather_error">{this.props.error}</p>
                }
            </div>
        )
    }
}

export default Weather;