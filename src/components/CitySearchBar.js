
import React, { useState } from 'react'

// very memory intensive - should be optimized by loading each city from remote db
import cities from '../js/city.list.json'

import Whisperer from './Whisperer'
///
/// Cities Search Bar component
///
const CitySearchBar = (props) => {

  const [searchValue, setSearchValue] = useState("")
  const [searchResults, setSearchResults] = useState([])

  ///
  /// Handles change input event
  ///
  const handleOnChangeInput = (e) => {

    const searched = e.target.value
    setSearchValue(searched)

    if (!searched) {
      setSearchResults([])
      return
    }

    const res = cities.filter(c => c.name.includes(searched))
                      .slice(0, 7)
                      
    if (res.length < 1) {
      setSearchResults([])
    } else {
      setSearchResults(res)
    }
  }

  ///
  /// Handles city change
  ///
  const handleCityChange = (cityId) => {
    props.fetchWeather(cityId)
    setSearchResults([])
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