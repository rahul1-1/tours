import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import {ITours} from './models/ITours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading,setLoading] = useState<boolean>(false);
  const [tours,setTours] = useState<ITours[]>([]);

  const removeTour = (id:string) =>{
    console.log("id in app ",id)
    const newTours = tours.filter((tour) => tour.id!==id);
    setTours(newTours) 
  }
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours( tours);
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
    
  };
  useEffect(()=>{
    fetchTours();
  },[]);

  if(loading){
    return (
      <main> <Loading></Loading></main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return <main>
    <Tours tours={tours}  removeTour = {removeTour}/>
  </main>
}

export default App
