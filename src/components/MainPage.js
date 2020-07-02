
import React, { useState, useEffect } from 'react'


import Forecast from './Forecast'
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
  }, [cityId])

  ///
  /// Loads weather immediately when component is loaded 
  ///
  const fetchWeather = async (cityId) => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${api_key}`)
      .then(res => res.json())
      .then(data => setResponse(data))
  }
  
  //////////////////////////////////////
  
  return (
    <div className="MainPage">
      <header className="MainPage-header">
          <h1>Weather Forecast</h1>
          <CitySearchBar fetchWeather={fetchWeather} />
      </header>
      
      <Forecast response={response} />
      
      <button onClick={() => console.log(response)}>Click me</button>   
    </div>
  )
}

export default MainPage