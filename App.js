import { useState } from "react";
import data from './data';
import Tours from "./components/Tours";


const App = () => {
  const [tours,setTours]=useState(data);

  function deleteHandler(id){
    const newTours=tours.filter(tour=>tour.id!==id);
    setTours(newTours);
  }

  if(tours.length===0){
    return(
      <div>
        <div>No tours left</div>
        <button onClick={refHandler}>Refresh</button>
      </div>
    )
  }

  function refHandler(){
    setTours(data);
  }

  return (
    <div>
      <Tours tours={tours} deleteHandler={deleteHandler}></Tours>
    </div>
  )
};

export default App;
