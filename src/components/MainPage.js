
import React, { useState, useEffect } from 'react'

import Forecast from './Forecast'
import CitySearchBar from './CitySearchBar'

const api_key = '259486d1d22b8309af6ffd18e24cba04'

///
/// Main page component
///
const MainPage = (props) => {

  const [forecastWeather, setForecastWeather] = useState([])
  const [currentWeather, setCurrentWeather] = useState({}) 
  const [cityId, ] = useState(2643743) // London

  useEffect(() => {
    fetchWeather(cityId)
  }, [cityId])

  ///
  /// Loads weather immediately when component is loaded 
  ///
  const fetchWeather = (cityId) => {

    // fetch current weather
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${api_key}`)
      .then(res => res.json())
      .then(data => setCurrentWeather(data))

    // fetch 5-day weather forecast
    fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${api_key}`)
      .then(res => res.json())
      .then(data => setForecastWeather(data))
  }
  
  //////////////////////////////////////
  
  return (
    <div className="MainPage">
      <header className="MainPage-header">
          <img src="https://image.flaticon.com/icons/svg/365/365237.svg" alt="Logo" width="50px"/>
          <h1><a href="https://jkvapil6.github.io/weather-app/">Weather Forecast</a></h1>
          <CitySearchBar fetchWeather={fetchWeather} />
      </header>
      
      <Forecast 
        forecastWeather={forecastWeather} 
        currentWeather={currentWeather}
      />
    
    {/*       
      <button onClick={() => console.log(currentWeather)}>Current</button>
      <button onClick={() => console.log(forecastWeather)}>Forecast</button>       */}
    </div>
  )
}

export default MainPage