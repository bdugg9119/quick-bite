import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Rating,
  Select,
  TextField
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  DatePicker,
  LocalizationProvider
} from '@mui/x-date-pickers';
import { Controller, useForm } from 'react-hook-form';

import { Restaurant, RestaurantCategory } from '../static/types';
import { nullRestaurant } from '../static/utils';

type CreateDialogProps = {
  handleClose: () => void,
  open: boolean
};

const CreateDialog = ({ handleClose, open }: CreateDialogProps) => {
  const { control, handleSubmit } = useForm({ defaultValues: {...nullRestaurant} });

  const onSubmit = (data: Restaurant) => console.log(data);

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        Add New Restaurant
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Controller
            control={control}
            name='name'
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Restaurant Name'
                placeholder='Enter Restaurant Name'
                required
              />
            )}
          />
          <Controller
            control={control}
            name='category'
            render={({ field }) => (
              <Select
                {...field}
                fullWidth
                label='Category'
                placeholder='Category'
                required
              >
                {
                  /* Wizardry to iterate across the enum using .map() */
                  (Object.keys(RestaurantCategory) as (keyof typeof RestaurantCategory)[])
                  .map(cat => <MenuItem value={cat}>{RestaurantCategory[cat]}</MenuItem>)
                }
              </Select>
            )}
          />
          <Controller
            control={control}
            name='last_visit'
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  {...field}
                  label='Last Visit'
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            )}
          />
          <Controller
            control={control}
            name='rating'
            render={({ field }) => <Rating {...field}/>}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()}>
            Cancel
          </Button>
          <Button
            onClick={() => {}}
            type='submit'
            variant='contained'
          >
            Create
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CreateDialog;