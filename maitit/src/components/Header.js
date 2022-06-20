import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import './Header.css'
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';



function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon fontSize="large" className="headerIcon"/>
        </IconButton>
        <img className='headerLogo' src='https://upload.wikimedia.org/wikipedia/en/d/d4/Maharaja_Agrasen_Institute_of_Technology_logo.PNG' alt="Logo"/>
        <IconButton>
            <ForumIcon fontSize="large" className="headerIcon"/>
        </IconButton>
    </div>
  )
}

export default Header