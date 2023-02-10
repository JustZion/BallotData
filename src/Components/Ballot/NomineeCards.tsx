import React, {FC, useEffect, useState} from 'react'
import {dataList, dataArray} from './Interfaces'   
// Some already defined interfaces imported from a typescript file
// for case of reusability

import { Stack, Grid, Box, Card, CardContent, Button, Typography } from '@mui/material';

  
interface Props {
    selected: string[][];
    data: dataArray;
    index: number;
    item: dataList;
    selectNominee: (a: string, b: string, index: number) => void;
}

// Typescript interface to clearly specifiy the types of Props being passed 
// between the Ballot and NomineeCard components

const NomineeCards: FC<Props> = ({selected, data, index,item,selectNominee}) => {


  return (
    
        <Grid item xs={12} md={4} lg={4} sm= {6}>
        <Card className=
        { selected.length && selected[index][1] === data.title ? 'nomineeCard selectedNomineeCard': 'nomineeCard'} sx={{  }}>
        <CardContent sx={{textAlign: 'center'}}>
            <Typography sx={{ fontSize: '19px' }} color="#121212" gutterBottom>
            {data.title}
            </Typography>
            <img src = {data.photoUrL} className='nomineeImage' />
            <Typography variant="body2" sx={{ }}>
            <Button onClick={() => selectNominee(item.id, data.title,index)} className='selectButton' variant='contained' size="small">
                Select Button
            </Button>
            </Typography>
        </CardContent>
        </Card>
        </Grid>
                                 
            
  )
}

export default NomineeCards;


