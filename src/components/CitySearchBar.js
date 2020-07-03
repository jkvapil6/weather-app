
import React, { useState, useEffect } from 'react'

// very memory intensive - should be optimized by loading each city from remote db
import cities from '../js/city.list.json'

import Whisperer from './Whisperer'

///
/// Cities Search Bar component
///
const CitySearchBar = (props) => {

  const [searchValue, setSearchValue] = useState("")
  const [searchResults, setSearchresults] = useState([])

  ///
  /// Handles change input event
  ///
  const handleOnChangeInput = (e) => {

    const searched = e.target.value
    setSearchValue(searched)

    if (!searched) {
      setSearchresults([])
      return
    }

    const res = cities.map(c => c.name)
                      .filter(n => n.includes(searched))
                      .slice(0, 5)

    
    if (res.length < 1) {
      setSearchresults([])
    } else {
      const noTuples = new Set(res)
      setSearchresults([...noTuples])
    }
  }

  ///
  /// Handles city change
  ///
  const handleCityChange = (city) => {
    setSearchresults([])
    setSearchValue("")

    console.log(city)
    
    const searched = cities.filter(c => c.name === city)

    console.log(searched)

    if (searched.length > 1) {
      console.log("Choose..")

      /// TODO

    } else {
      props.fetchWeather(searched[0].id)
    }
  }
 
  //////////////////////////////////////

  return (
    <div className="SearchBar">
      <input 
        type="text" 
        onChange={handleOnChangeInput} 
        value={searchValue}
        placeholder="Select City"
      />

      <Whisperer 
        searchResults={searchResults} 
        handleCityChange={handleCityChange} 
      />
    </div>
  )
}

export default CitySearchBar