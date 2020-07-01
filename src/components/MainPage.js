
import React, { useState, useEffect } from 'react'


import ForecastGraph from './ForecastGraph'
import CitySearchBar from './CitySearchBar'

const api_key = '259486d1d22b8309af6ffd18e24cba04'

///
/// Main page component
///
const MainPage = (props) => {

  const [response, setResponse] = useState([]) 
  const [cityId, setCityId] = useState(2643743) // London

  useEffect(() => {
    fetchWeather(cityId)
  }, [])

  ///
  /// Loads weather immediately when component is loaded 
  ///
  const fetchWeather = (cityId) => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${api_key}`)
      .then(res => res.json())
      .then(data => setResponse(data))
  }
  

  return (
    <div className="MainPage">
      <div style={{float: "left"}}>
        <h1>Weather Forecast App</h1>
        <button onClick={() => console.log(response)}>Click me</button>
        
        
        <CitySearchBar />
        
        <ForecastGraph /> 
      </div>
    </div>
  );
}

export default MainPage