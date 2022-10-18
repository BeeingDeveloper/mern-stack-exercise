import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import '../index.css'

const Navbar = () => {
  return (
      <Box style={{height: '3.5rem', width: '100vw', background: '#0c4a6e' }} >
        <Box style={{width: '75vw', height: '3.5rem', margin: 'auto', display:'flex', justifyContent:'space-evenly', fontSize:'1.2rem', lineHeight:'3rem',  }} >
          <Link to='/' className='a'>Exercise List</Link>
          <Link to='/createexercise' className='a'>Crete Exercise</Link>
          <Link to='/createuser'className='a'>Create User</Link>
          <Link to='/' className='a'>Exercise List</Link>
        </Box>
      </Box>
  )
}

export default Navbar