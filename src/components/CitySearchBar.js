
import React, { useState, useEffect } from 'react'

// very memory intensive - should be optimalized by loading each city from remote db
import cities from '../js/city.list.json'

import Whisperer from './Whisperer'

///
/// Cities Search Bar component
///
const CitySearchBar = (props) => {

  const [searchResults, setSearchresults] = useState([])

  ///
  /// Handles change input event
  ///
  const handleOnChangeInput = (e) => {

    const searched = e.target.value
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
      setSearchresults(res)
    }
  }

  return (
    <div className="SearchBar">
      
      <input type="text" onChange={handleOnChangeInput}></input>
      
      
      <button onClick={() => console.log("ss")}>Load file</button>
      <Whisperer searchResults={searchResults}/>
    </div>
  );
}

export default CitySearchBar