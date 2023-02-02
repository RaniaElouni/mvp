import React, { useState } from 'react'

const Search = (props) => {
const [query,setQuery]=useState('')



const filteredList = props.memories.filter(item => item.description.includes(query) );





  return (
    <div className='search'>
      Search :<input onChange={(e)=>{setQuery(e.target.value)}} />
         <button >Search</button>
         
         <ul> 
    
    {filteredList.map((item, index) => (
        <li>{item.description}</li>
    ))}
    </ul>
    
    </div>
  )
}

export default Search