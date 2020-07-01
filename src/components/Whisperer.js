
import React from 'react'

///
/// Whisperer component
///
const Whisperer = (props) => {

  const list = props.searchResults.map(c => (
    <li key={c}> {c} </li>
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