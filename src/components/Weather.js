import React, { useState } from 'react';
import DisplayWeather from './DisplayWeather';

const Weather = () => {

    //Using useState hook to set initial state. 

    const [form, setForm] = useState({ city : '' });

    const [weather, setWeather] = useState({});

    const weatherData = async (e) => {
        
        e.preventDefault();   //prevent default behaviour 
        
        if(form.city === ''){
            alert("City name required")
        } else {
            const data = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=imperial&q=${form.city}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "SIGN-UP FOR KEY",
                    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
                }
            })
            .then(data => data.json())
            .catch(err => {
                console.error(err);
            });
            setWeather(data);
            // console.log(weather)
        }
    }

    // handling user input once user enter a value in form input is assigned to city

    const handleChange = (e) => {
        let name = e.target.name;
        let value  = e.target.value;

        if(name === 'city'){
            setForm({...form, city:value});
        }
    };

    return (
            <div>
                <h1><span>Weather App</span></h1>
                <br/>
                
                <form>
                    <input type="text" placeholder="Enter City" name="city" onChange = {(e) => handleChange(e)} />
                    &nbsp; &nbsp; &nbsp;&nbsp;
                    <button onClick = {(e) => weatherData(e)}>Request</button>
                </form>

{/* if weather data does not exist component will display nothing else DisplayWeather component */}
                
                <div>
                    {weather.data === '' ?  null : 
                    (
                    <div>                    
 {/* passing weather data as prop to Displayweather component */}
                        <DisplayWeather weather ={weather} />
                    </div>
                    ) 
                    }
                </div>

            </div>
        );
}

export default Weather;