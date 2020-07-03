import React, { useState, useEffect } from 'react'

///
/// CurrentWeather component
///
const CurrentWeather = (props) => {

  const [weather, setWeather] = useState(0)

  useEffect(() => {
    handleNewResponse(props.weather)
  }, [props.weather])

  ///
  /// OpenWeather current weather response handler
  ///
  const handleNewResponse = (res) => {
    if (res.cod === 200) {
      setWeather((res.main.temp - 273.15).toFixed(1))
    }
  }

  //////////////////////////////////////

  return (
    <div className="CurrentWeather">
      <h3>Current Weather</h3>
      <h2> { weather }°C </h2>
    </div>
  )
}

export default CurrentWeather
