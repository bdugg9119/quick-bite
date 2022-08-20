import { Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import { Restaurant } from "../static/types";

type RestaurantModalProps = {
  open: boolean,
  restaurant: Restaurant
};

const RestaurantModal = ({open, restaurant}: RestaurantModalProps) => {
  const { category, last_visit, name, rating } = restaurant;

  return (
    <Dialog open={open}>
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

export default RestaurantModal;