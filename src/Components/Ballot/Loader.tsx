import React from 'react'
import {Stack} from '@mui/material'
import Spinner from 'react-spinner-material';   // spinner library responsible for the loader UI

const Loader = () => {   
  return (
    <>
    <Stack direction='row' justifyContent='center'
    sx={{backgroundColor:'#F4F4F4', mt:3}} alignItems='center' height='100vh'>
       
       <Spinner radius='300px' color=' #BAC8D3' />
       
   </Stack>
    </>
    
  )
}

export default Loader