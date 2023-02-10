import React, {FC, useEffect, useState} from 'react'
import { Stack, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface data {
    id: string,
    items: {
      id: string,
      photoUrL: string,
      title: string
    }[]
    title: string
  }

interface dataArray {
      id: string,
      photoUrL: string,
      title: string
      
  }
  

interface Props {
    selected: string[][];
    data: dataArray;
    index: number;
    item: data;
    selectNominee: (a: string, b: string, index: number) => void

}




const NomineeCards: FC<Props> = ({selected, data, index,item,selectNominee}) => {


  return (
    
        <Grid key={data.title} item xs={6} md={4} lg={4} sm= {6}>
        <Card className=
        { selected.length && selected[index][1] === data.title ? 'nomineeCard selectedNomineeCard': 'nomineeCard'} sx={{  }}>
        <CardContent sx={{textAlign: 'center'}}>
            <Typography sx={{  }} variant='h6' color="#121212" gutterBottom>
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


