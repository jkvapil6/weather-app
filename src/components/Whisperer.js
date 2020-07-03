
import React from 'react'

///
/// Whisperer component
///
const Whisperer = (props) => {

  const list = props.searchResults.map(c => (
    <li onClick={() => props.handleCityChange(c.id)} key={c.id}> 
      { c.name.length <= 25 ? c.name : c.name.slice(0, 25).concat('...') } ({c.country}) 
    </li>
  ))

  return (
    <div className="Whisperer">
      <ul>  
        { list }     
      </ul> 
    </div>
  );
}

export default Whisperer