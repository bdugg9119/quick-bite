import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Rating,
  TextField
} from '@mui/material';
import { Restaurant } from '../static/types';

type CreateDialogProps = {
  handleClose: () => void,
  open: boolean
};

const CreateDialog = ({
  handleClose,
  open
}: CreateDialogProps) => {

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        Add New Restaurant
      </DialogTitle>
      <DialogContent>
        <TextField label='category' required />
        <TextField label='last visit' />
        <Rating />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()}>
          Cancel
        </Button>
        <Button
          onClick={() => {}}
          variant='contained'
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateDialog;