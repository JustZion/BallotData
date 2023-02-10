import React, {useEffect, useState} from 'react'
import {dataList} from './Interfaces'
import { Stack, Grid} from '@mui/material';
import NomineeCards from './NomineeCards';
import BasicModal from './Modal';
import Loader from './Loader';          // a preloader component that shows before displaying the fetched data on thescreen



const Ballot = () => {

  const [data, setData] = useState<dataList[]>([])   
  // data hook that stores the ballot data from the fetched API

  const [selected, setSelected] = useState<string[][]>([])  
  // selected hook that stores the votes a user makes by storing the category and movie title
  
  const [selectedStatus, setSelectedStatus] = useState<boolean>(false) 
  //  selectedStatus updates to true immediately a user has started voting, this prevents 
  //  the modal from displaying empty selections

  const [watch ,setWatch] = useState<number>(0)
  // Prevents overlooping of fetched data from API from useEffect hook

  const setBallot = (data: dataList[]) => {
    console.log(data)
    setData(data)
    const selectedArray = new Array(data.length).fill(undefined).map(() => [])
    console.log(selectedArray,'errr')
    setSelected(selectedArray)
  }
  // This function does the following 
  //1. Stores the data from the fetched API into the data hook
  //2. Creates a new list that initializes the selected hook

  const selectNominee = (x:string ,y:string,index:number) => {
    var selectedArray = [...selected]
    selectedArray[index][0] = x
    selectedArray[index][1] = y
    console.log((selectedArray), index)
    setSelected(selectedArray)
    setSelectedStatus(true)
  }
  // This function is called once a user has started voting, and does the  following:
  //1. Stores what the user clicked or voted in the selected hook
  //2. Updates the selectedStatus state to True indicating the user has started voting

  const resetSelection = ()=> {
    const previous = new Array(data.length).fill(undefined).map(() => [])
    setSelected(previous)
    setSelectedStatus(false)
  }
  // This function ensures the selected hook and selectedStatus hook are set back to default
  // selected hook is set to an array of empty lists
  // selectedStatus is set back to false

  

  {/* const fetchData = async () => {
  //   fetch('.netlify/functions/api/getBallotData')
  //       .then(response => response.json())
  //       .then(data => setBallot(data.items))

    ----The above code works for a live deployment to netlify after running npm run build initially ---

    http://localhost:8010/api/getBallotData  --- backend url from localhost API
    .netlify/functions/index                 ---backend url for live deployment

    
  / */}

  const fetchData = async () => {
    fetch('http://localhost:8010/api/getBallotData')
        .then(response => response.json())
        .then(data => setBallot(data.items))
  }

  //  This function is responsible for fetching data directly from the localhost API 

  useEffect(()=> {
    if (data.length) {
      console.log('Data fetched Successfully')
      return
    }
    else {
      fetchData()
      setWatch(1)
    }
  }, [data])

  // This useEffect hook automatically fetches data once the page loads

  return (
    <Stack justifyContent='center' alignItems='center'
     sx = {{ backgroundColor: ''}} className='ballot'>
      <div className='golden-header'>
        Golden Globe Award
      </div>
      <Stack className='mainTab'>
        { data.length ? data.map((item,index) => (
          <Stack key={index}>
            <Stack  className='categories'>{item.id} Category</Stack>
            <Grid container spacing={3}>
            {
              item.items.map((data, indexer) => (
                <NomineeCards key = {indexer} selected={selected} data={data} index={index} 
                item={item} selectNominee= {selectNominee} />              
              ))
            }
            
            </Grid>
          </Stack>

        )): <Loader />
      }
      
      {
        data.length ? (
          <Stack className='bottomStack'>
            <BasicModal resetSelection={resetSelection} selectedStatus =  {selectedStatus} results = {selected} />
          </Stack>
        ): ''
      }
      
       
      </Stack>
    </Stack>
  )
}

export default Ballot;


