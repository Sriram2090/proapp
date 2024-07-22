import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Home3 from '../Home3/Home3';
import {  useNavigate } from 'react-router-dom';

export default function Loader() {
  const Navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Redirect to Home page after 5 seconds
      Navigate("/Home3");
    }, 200); 

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [Navigate]);

  return (
   <div className='load'>
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
      
      </div>
   
  );
}

