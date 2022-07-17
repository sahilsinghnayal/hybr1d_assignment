import React, { useState } from 'react'
import Fetch from './Fetch'

function Home() {
    const [query, setQuery] = useState("");
  return (<> 
    <div className='container'> 
   <input type="search"
    placeholder='search here...' 
    onChange={(e)=>{setQuery(e.target.value)}}/>
    </div>
    <Fetch sendquery={query}/>
    </>
    )
}

export default Home