import {
  Box,
  Button
} from '@mui/material';
import { useState } from 'react';
import CreateDialog from './CreateDialog';

const TopButtons = () => {
  const [createDialogOpen, setCreateDialogOpen] = useState(false);

  const handleCreateClick = () => setCreateDialogOpen(true);

  const handleCloseCreateDialog = () => setCreateDialogOpen(false);

  return (
    <>
      <CreateDialog 
        handleClose={handleCloseCreateDialog}
        open={createDialogOpen}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '3% 0' }}>
        <Button variant='contained'>Pick A Restaurant</Button>
        <Button
          onClick={() => handleCreateClick()}
          variant='contained'
        >Add New Restaurant</Button>
      </Box>
    </>
  );
};

export default TopButtons;
