import React, { useState } from 'react'
import '../index.css'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';



const form = {
  height: '2rem', width: '100%', background: 'transparent', margin: '1rem', borderRadius: '0.5rem', border: '2px solid magenta' 
}


const CreateExercise = () => {

 
  const [userName, setUserName] = useState('');
  // const [exerciseName, setExerciseName] = useState('');
  const [desc, setDesc] = useState('');
  const [durat, setDurat] = useState(0);
  const [startDate, setStartDate] = useState(new Date());


  const onChangeUsername = (e)=>{
    setUserName(e.target.value);
  }

  const onChangeDescription = (e)=>{
    setDesc(e.target.value);
  }
  const onChangeDuration = (e)=>{
    setDurat(e.target.value);
  }


  const onSubmit =()=>{
    // e.preventDefault();

    const exercise ={
      username: userName,
      description: desc,
      duration: durat,
      date: startDate

    }

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    // window.location = '/'

    console.log('Exercise submitted...');
  }




  return (
    <div className='backgroundimg'>
      <form style={{display: 'flex', flexDirection: 'column', width: '30rem', margin:'auto',
               textAlign:'left', position: 'relative', top: '10rem', backdropFilter: 'blur(100px)',
              paddding: '1rem', borderRadius: '1rem', outline: 'none'
        }}>

        <div style={{display: 'flex', fontSize: '1.5rem', lineHeight: '2rem', padding: '0.5rem', marginTop: '1rem'}}>
          Username:
          <input 
            // required
            style={{background: 'transparent', border: '2px solid magenta', marginLeft: '1rem', width: '70%'}}
            value={userName}
            onChange={onChangeUsername}
            />
        </div>

        <div style={{display: 'flex', fontSize: '1.5rem', lineHeight: '3.5rem',paddingLeft: '0.5rem'}}>
          Description:
          <input style={form} value={desc} onChange={onChangeDescription} />
        </div>

        <div style={{display: 'flex', fontSize: '1.5rem', lineHeight: '3.5rem',paddingLeft: '0.5rem'}}>
          Duration:
          <input style={form} value={durat} onChange={onChangeDuration} />
        </div>

        <div style={{display: 'flex', fontSize: '1.5rem', lineHeight: '2rem',padding: '0.5rem',}}>
          Date:
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='date' />
        </div>
      <button style={{border: '2px solid magenta', borderRadius: '0.25rem', background: 'transparent', padding:'0.3rem', width: 'fit-content', margin: 'auto', marginBottom: '2rem' }} 
      onClick={()=>onSubmit()} >Create Exercise</button>

      </form>
    </div>
  )
}

export default CreateExercise




// const [username, setUsername] = useState('');
// const [desc, setDesc] = useState('');
// const [duration, setDuration] = useState(0);
// const [date, setDate] = useState(new Date());
// const [users, setUsers] = useState([]);

// const onChangeUsername =(e)=>{
//   setUsername(e.target.value);
// }
// const onChangeDesc =(e)=>{
//   setDesc(e.target.value);
// }
// const onChangeDuratioin =(e)=>{
//   setDuration(e.target.value);
// }
// const onChangeDate =(e)=>{
//   setDate(e.target.value);
// }
// const onChangeUsers =(e)=>{
//   setUsers(e.target.value);
// }