import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { deleteRestaurant } from '../api';

type DeleteDialogProps = {
  handleClose: () => void,
  id: number,
  name: string,
  open: boolean
}

const DeleteDialog = ({handleClose, id, name, open}: DeleteDialogProps) => {
  const deletion = useMutation(deleteRestaurant);

  const handleDelete = (id: number) => {
    deletion.mutate(id);
    handleClose();
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Delete {name}?</DialogTitle>
      <DialogContent>
        <Typography variant='body1'>
          Are you sure you want to delete {name}?
          <br />
          This action cannot be undone.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()}>Cancel</Button>
        <Button
          color='error'
          onClick={() => handleDelete(id)}
          variant='contained'
        >Delete</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteDialog;
