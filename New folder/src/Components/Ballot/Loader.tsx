import React, {useRef, useEffect} from 'react'
import {Stack} from '@mui/material'
import Spinner from 'react-spinner-material';

const Loader = () => {                                                          // Loader before initial 'list of starwars film' data is ready (has been fetched from api)

    
  return (
    <>
    <Stack direction='row' justifyContent='center' alignItems='center' height='100vh'>
       
       <Spinner radius='300px' color='#BAC8D3' />
       
   </Stack>
<Stack  justifyContent='center' alignItems='center' color='black'
   sx = {{fontFamily:'monospace', letterSpacing: '1px'}}
   >loading...</Stack>
    </>
    
  )
}

export default Loader