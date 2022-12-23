import React from "react";
import axios from "axios";
import { useState } from "react";

function App() { 
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=1b8f10e6dec639a10401c3ffbc2a56c3' 

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => { 
        setData(response.data);
        console.log(response.data);
      });
    }
  }
  
  return (
    <div className="app">
      <div className="search">
        <inp ut 
          value = {location}
          onChange = {event => setLocation(event.target.value)}
          onKeyPress = {searchLocation}
          placeholder = 'Enter Location'
          type = 'text'/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1>72°</h1>
          </div>
          <div className="description">
            <p>Cloudy</p>
          </div>
          <div className="bottom">
            <div className="feels">
              <p><b>72°</b></p> 
              <p> Feels Like</p>
            </div>
            <div className="humidity">
              <p><b>20%</b></p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p><b>5 MPH</b></p>
              <p>Wind Speed</p>
            </div>
        </div>
      </div>
    </div>
     

      
    </div>
  );
}

export default App;
