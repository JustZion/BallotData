import React, {FC} from 'react';
import {Box, Button, Typography, Stack, Modal} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface Props {
  results: string[][]
}




const BasicModal:FC<Props> = ({results}) =>  {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} size='large' className='bottomButton' variant='contained'>
          Submit Vote Button
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant='h4' sx={{mb: 3}} >Voting successful !
          <span className='doneIcon'><CheckCircleIcon sx={{color: 'green'}} fontSize='large' /></span></Typography>
          {
            results.length ? results.map((item) => (
              <>
              <Typography sx={{textTransform: 'capitalize', fontWeight:600}} id="modal-modal-title" variant="h6" component="h2">
                {item[0]}
              </Typography>
              <Typography sx={{textTransform: 'capitalize',  mt: 1, mb: 2}} id="modal-modal-description">
                {item[1]}
              </Typography>
              </>
            )): ''
          }
          <Stack sx={{mt: 4}} >
            <Button endIcon={<CancelIcon />} size='large' className='buttonClose'
            onClick={handleClose} variant='contained'>Close</Button>
          </Stack>
          
        </Box>
      </Modal>
    </>
  );
}

export default BasicModal