import React from 'react';

const DisplayWeather = (props) => {
    //acessing and printing specific property from fetch JSON data
   return (
       <div>
           {props.weather.cod === 200 ?
                <div>
                    <p><strong>{props.weather.name}</strong></p>
                    <p>It is currently {Math.round(props.weather.main.temp)} degrees out with {props.weather.weather[0].description}.</p>
                </div>
            : null
            }
       </div>
   )
}

export default DisplayWeather;