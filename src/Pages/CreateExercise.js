import React, { useState } from 'react'
import '../index.css'
const form = {
  height: '2rem', width: '100%', background: 'transparent', margin: '1rem', borderRadius: '0.5rem', border: '2px solid black' 
}


const CreateExercise = () => {

  const [exercise, setExercise] = useState({
    username: '',
    desc: '',
    getDuration: 0,
    date: new Date(),
    users: []
  })

  let getUsername ='';
  let getDesc ='';
  let getDuration =0;
  let getDate = new Date();
  let getUsers = [];

  const onChangeUsername = (e) => {
    getUsername = e.target.value
  }
  const onChangeDesc = (e) => {
    getDesc = e.target.value
  }
  const onChangeDuratioin = (e) => {
    getDuration = e.target.value
  }
  const onChangeDate = (e) => {
    getDate = e.target.value
  }
  const onChangeUsers = (e) => {
    getUsers = e.target.value
  }

  const onSubmit =(e)=>{
    e.preventDefault();

    setExercise({
      username: getUsername,
      desc: getDesc,
      duration: getDuration,
      date: getDate,
      users: getUsers
    });

    window.location = '/'
  }


  return (
    <div className='backgroundimg'>
      <form style={{display: 'flex', flexDirection: 'column', width: '30rem', margin:'auto',
               textAlign:'left', position: 'relative', top: '10rem', backdropFilter: 'blur(100px)',
              paddding: '1rem', borderRadius: '1rem'
               }}>
        <div style={{display: 'flex', fontSize: '1.5rem', lineHeight: '3.5rem', paddingLeft: '0.5rem'}}>
          Exercise:
          <input style={form} onChange={onChangeUsername} />
        </div>

        <div style={{display: 'flex', fontSize: '1.5rem', lineHeight: '3.5rem',paddingLeft: '0.5rem'}}>
          Description:
          <input style={form} onChange={onChangeDesc} />
        </div>

        <div style={{display: 'flex', fontSize: '1.5rem', lineHeight: '3.5rem',paddingLeft: '0.5rem'}}>
          Duration:
          <input style={form} onChange={onChangeDuratioin} />
        </div>

      <button style={{border: '2px solid magenta', borderRadius: '0.25rem', background: 'transparent', padding:'0.3rem', width: 'fit-content', margin: 'auto', marginBottom: '2rem' }} onClick={onSubmit} >Create Exercise</button>

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