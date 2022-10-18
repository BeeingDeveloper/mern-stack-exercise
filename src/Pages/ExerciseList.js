import React, { useState, useEffect } from 'react'
import '../index.css'
import axios from 'axios'

const ExerciseList = () => {


  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    // return () => {
    //   second
    // }
    
    axios.get('http://localhost:5000/exercises/')
      .then(res => {
        setExercises(res.data);
      }).catch(err=>console.log(err));

  }, [exercises]);


  const deleteExercise =(id)=> {
    axios.delete('http://localhost:5000/exercises/' + id)
      .then(res => console.log(res.data));
    
      setExercises(exercises.filter(elm => elm._id !== id));
  }
  

  return (
    <div className='exerciseList'>
      
    </div>
  )
}

export default ExerciseList