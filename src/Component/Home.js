import React, { useState } from 'react'
import Fetch from './Fetch'
import Searchwait from './Searchwait';

function Home() {
    const [query, setQuery] = useState("");
  return (<> 
    <div className='container'> 
   <input type="search"
    placeholder='search here...' 
    onChange={(e)=>{setQuery(e.target.value)}}/>
    </div>
     {  query?
    <Fetch sendquery={query}/>:<Searchwait/>
     }
    </>
    )
}

export default Home