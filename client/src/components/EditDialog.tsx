import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField
} from '@mui/material';
import { Restaurant } from '../static/types';

type EditDialogProps = {
  handleClose: () => void,
  open: boolean,
  restaurant: Restaurant
};

const EditDialog = ({
  handleClose,
  open,
  restaurant
}: EditDialogProps) => {
  const { category, last_visit, name, rating } = restaurant;

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        <TextField defaultValue={name} required />
      </DialogTitle>
      <DialogContent>
        <TextField defaultValue={rating} />
        <TextField defaultValue={category} required />
        <TextField defaultValue={last_visit?.toLocaleDateString('en-US')} />
      </DialogContent>
    </Dialog>
  );
};

export default EditDialog;