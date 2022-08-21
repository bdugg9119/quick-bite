import { Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import { Restaurant } from "../static/types";

type RestaurantDialogProps = {
  handleClose: () => void,
  open: boolean,
  restaurant: Restaurant
};

const RestaurantDialog = ({
  handleClose,
  open,
  restaurant
}: RestaurantDialogProps) => {
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

export default RestaurantDialog;