import React from "react"
import axios from "axios"
import { useState } from "react"

function App() { 
  const [data, setData] = useState({}); 
  const [location, setLocation] = useState('')

  const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=1b8f10e6dec639a10401c3ffbc2a56c3' 

  const searchLocation = (event) => { 
    if (event.key === "Enter") {
      axios.get(url).then((response) => { 
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange ={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type='text'/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}&deg;F</h1> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p><b>{data.main.humidity}%</b></p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p><b>{data.wind.speed.toFixed()} MPH</b></p> : null}
            <p>Wind Speed</p>
        </div>
      </div>
    

    </div>
  </div>
  );
}

export default App;
