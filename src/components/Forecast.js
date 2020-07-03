
import React, { useState, useEffect } from 'react'
import WeatherChart from './WeatherChart'
import CurrentWeather from './CurrentWeather'

import formatHelper from '../js/helpers/formatHelper'

///
/// ForecastGraph component
///
const ForecastGraph = (props) => {

  const [name, setName] = useState("")
  const [country, setCountry] = useState("")
  const [weather, setWeather] = useState([])

  useEffect(() => {
    handleNewResponse(props.forecastWeather)
  }, [props.forecastWeather])

  ///
  /// OpenWeather 5-day forecast response handler
  ///
  const handleNewResponse = (res) => {
    if (res.cod === "200") {
      setName(res.city.name)
      setCountry(res.city.country)

      const w = res.list.map(i => { 
        return {
          time: formatHelper.formatDate_DDMM_HHMM(new Date(i.dt * 1000)), 
          temp: (i.main.temp - 273.15).toFixed(2)
        }
      })

      setWeather(w)
    }
  }

  //////////////////////////////////////

  return (
    <div className="Forecast">
      <header className="Forecast-header">
        <h2>{ name.concat(" (").concat(country).concat(")") }</h2>
      </header>
      <div className="Forecast-info">
        <CurrentWeather weather={props.currentWeather}/>
        
      </div>
      <WeatherChart weather={weather} />
    </div>
  )
}

export default ForecastGraph
