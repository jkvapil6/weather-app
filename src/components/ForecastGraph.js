
import React, { useState, useEffect } from 'react'

///
/// ForecastGraph component
///
const ForecastGraph = (props) => {

  const [name, setName] = useState("")
  const [country, setCountry] = useState("")
  const [periods, setPeriods] = useState([])

  useEffect(() => {
    handleNewRepsponse(props.response)
  }, [props.response])

  ///
  /// Whisperer component
  ///
  const handleNewRepsponse = (res) => {
    console.log(res)

    if (res.cod === "200") {
      setName(res.city.name)
      setCountry(res.city.country)
      setPeriods(res.list)
    }
  }

  //////////////////////////////////////

  return (
    <div>
      <h3>{ name.concat(" (").concat(country).concat(")") }</h3>
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
  );
}

export default ForecastGraph
