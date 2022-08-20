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
        <TextField required>{name}</TextField>
      </DialogTitle>
      <DialogContent>
        <TextField>{rating}</TextField>
        <TextField required>{category}</TextField>
        <TextField>{last_visit?.toLocaleDateString('en-US')}</TextField>
      </DialogContent>
    </Dialog>
  );
};

export default RestaurantModal;