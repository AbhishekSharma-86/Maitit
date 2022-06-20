import React from 'react'
import './SwipeButton.css'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

function SwipeButtons() {
    const swiped = ()=>{
        console.log("swiped");
    }
  return (
    <div className='swipeButtons'>
        <IconButton onClick={swiped} className='swipeButtonRepeat'>
            <ReplayIcon fontSize='large'/>
        </IconButton>
        <IconButton onClick={swiped} className='swipeButtonLeft'>
            <CloseIcon fontSize='large'/>
        </IconButton>
        <IconButton onClick={swiped} className='swipeButtonStar'>
            <StarRateIcon fontSize='large'/>
        </IconButton>
        <IconButton onClick={swiped} className='swipeButtonRight'>
            <FavoriteIcon fontSize='large'/>
        </IconButton>
        <IconButton onClick={swiped} className='swipeButtonLightning'>
            <FlashOnIcon fontSize='large'/>
        </IconButton>
    </div>
  )
}

export default SwipeButtons