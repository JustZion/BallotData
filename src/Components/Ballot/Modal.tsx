import React, {FC} from 'react';
import {Box, Button, Typography, Stack, Modal} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { md: '600px', sm: '400px', xs: '300px'},
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
// Some CSS styles to take care of how the modal is being displayed

interface Props {
  results: string[][]            
  selectedStatus: boolean
  resetSelection: () => void
}
// Typescript interface to clearly specifiy the types of Props being passed 
// between the Ballot and Modal components

const BasicModal:FC<Props> = ({results, selectedStatus, resetSelection}) =>  {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false) ; resetSelection()};

  const emptySelect  = () => {
    alert('Please select a vote first')
  }

  return (
    <>
      <Button onClick={ !selectedStatus ? emptySelect  : handleOpen} size='large' className={selectedStatus ? 'bottomButton': 'bottomButton'}
      
      variant='contained'>
          Submit Vote Button
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  sx={style} className='modal'>
          <Typography  sx={{mb: 3, fontSize: {md: '40px', xs: '29px'}}} >Voting successful !
          <span className='doneIcon'><CheckCircleIcon sx={{color: 'green'}} fontSize='large' /></span></Typography>
          {
            results.length ? results.map((item, index) => (
              <Stack key={index}>
              <Typography sx={{textTransform: 'capitalize', fontWeight:600}} id="modal-modal-title" variant="h6" component="h2">
                {item[0]}
              </Typography>
              <Typography sx={{textTransform: 'capitalize',  mt: 0, mb: item.length ? 1 : 0 }} id="modal-modal-description">
                {item[1]}
              </Typography>
              </Stack>
            )): ''
          }
          <Stack sx={{mt: 4}} >
            <Button endIcon={<CancelIcon />}  size='large' className='buttonClose'
            onClick={handleClose} variant='contained'>Close</Button>
          </Stack>
          
        </Box>
      </Modal>
    </>
  );
}

export default BasicModal