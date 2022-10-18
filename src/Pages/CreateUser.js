import React, { useState } from 'react'
import '../index.css'
import axios from 'axios';

const CreateUser = () => {

  const [userName, setUserName] = useState('');

  const onChangeUsername = (e)=>{
    setUserName(e.target.value);
  }

  const onSubmit =()=>{
    // e.prventDefault();
    console.log('submitted...')
    const user = {
      username: userName
    }

    axios.post('http://localhost:5000/users/add', user)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));

    console.log('submitted...')

    setUserName('');
  }

  return (
    <div className='createUser'>
      <div style={{height: '25rem', width: '35rem', background: 'transparent', 
      margin: 'auto', position: 'relative', top: '10rem',
      borderRadius: '0.5rem', backdropFilter: 'blur(50px)' }}
       >
        <h3 style={{lineHeight: '5rem'}}>Create User</h3>
        <form>
          <input 
            style={{height: '3rem', width: '80%', margin:'1rem', background: 'transparent', 
                  border: '2px solid magenta', borderRadius: '0.5rem', outline: 'none' }}
            onChange={onChangeUsername} value={userName}
          />
          
          <button style={{border: '2px solid magenta', borderRadius: '0.25rem', background: 'transparent', padding:'0.3rem', width: 'fit-content', margin: 'auto', marginBottom: '2rem' }}
            onClick={()=>onSubmit()}  >
            <h5>Create User</h5>
          </button>

        </form>
      </div>
    </div>
  )
}

export default CreateUser