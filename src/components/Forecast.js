
import React, { useState, useEffect } from 'react'
import WeatherChart from './WeatherChart'

///
/// ForecastGraph component
///
const ForecastGraph = (props) => {

  const [name, setName] = useState("")
  const [country, setCountry] = useState("")
  const [periods, setPeriods] = useState([])
  const [weather, setWeather] = useState([])

  useEffect(() => {
    handleNewRepsponse(props.response)
  }, [props.response])

  ///
  /// Whisperer component
  ///
  const handleNewRepsponse = (res) => {
    if (res.cod === "200") {
      setName(res.city.name)
      setCountry(res.city.country)
      setPeriods(res.list)
    
      const w = res.list.map(i => { 
        return {
          time: i.dt_txt, 
          temp: (i.main.temp - 273.15).toFixed(2)
        }
      })

      setWeather(w)
    }
  }

  //////////////////////////////////////

  return (
    <div className="Forecast">
      <h2>{ name.concat(" (").concat(country).concat(")") }</h2>
      <WeatherChart weather={weather} />
      <ul>
        { periods.map(i => (
            <li onClick={() => console.log(i)} key={i.dt}>
              { 
                i.dt_txt.concat(" ").concat((i.main.temp - 273.15).toFixed(2)).concat("°C")
              }
            </li>
          )) 
        }
      </ul>
    </div>
  )
}

export default ForecastGraph
