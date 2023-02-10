import React, {useEffect, useState} from 'react'
import { Stack, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NomineeCards from './NomineeCards';
import BasicModal from './Modal';
import Loader from './Loader';



interface data {
  id: string,
  items: {
    id: string,
    photoUrL: string,
    title: string
  }[]
  title: string
}

interface Selected {
  category: string,
  selectedNominee: string
}




const Ballot = () => {

  const [data, setData] = useState<data[]>([])
  const [selected, setSelected] = useState<string[][]>([])

  const [watch ,setWatch] = useState<number>(0)

  const setBallot = (data: data[]) => {
    console.log(data)
    setData(data)
    var selectedObject = {category: '', selectedNominee: ''}
    const selectedArray = new Array(data.length).fill(undefined).map(() => [])
    console.log(selectedArray,'errr')
    setSelected(selectedArray)
  }

  const selectNominee = (x:string ,y:string,index:number) => {
    var selectedArray = [...selected]
    selectedArray[index][0] = x
    selectedArray[index][1] = y
    console.log((selectedArray), index)
    setSelected(selectedArray)
    
  }

  const fetchData = async () => {
    fetch('http://localhost:8010/api/getBallotData')
        .then(response => response.json())
        .then(data => setBallot(data.items))
  }

  useEffect(()=> {
    
    if (data.length) {
      console.log('second')
      return
    }
    else {
      fetchData()
      setWatch(1)
    }
    

  }, [data])

  return (
    <Stack justifyContent='center' alignItems='center'
     sx = {{width: '100%', backgroundColor: 'white'}} className='ballot'>
      <div className='golden-header'>
        Golden Globe Award
      </div>
      <Stack width='80%'>
        { data.length ? data.map((item,index) => (
          <>
            <Stack key={item.id} className='categories'>{item.id} Category</Stack>
            <Grid container spacing={3}>
            {
              item.items.map((data) => (
                <NomineeCards selected={selected} data={data} index={index} 
                item={item} selectNominee= {selectNominee} />              
              ))
            }
            </Grid>
          </>

        )): <Loader />
      }
      
      <Stack className='bottomStack'>
       <BasicModal results = {selected} />
      </Stack>
       
      </Stack>
    </Stack>
  )
}

export default Ballot;


