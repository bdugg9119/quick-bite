import {
  Button,
  CircularProgress,
  Paper,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import EditDialog from './EditDialog';
import { getAllRestaurants } from '../api';
import { nullRestaurant } from '../static/utils';
import { Restaurant } from '../static/types';
import { DeleteDialog } from '.';

const RestaurantList = () => {
  const { data: restaurants, isLoading } = useQuery(['restaurants'], getAllRestaurants);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(nullRestaurant);


  const handleDeleteClick = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setDeleteDialogOpen(true);
  }

  const handleCloseDeleteDialog = () => setDeleteDialogOpen(false);

  const handleEditClick = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setDialogOpen(true);
  };

  const handleCloseEditDialog = () => setDialogOpen(false);


  if (isLoading) return <CircularProgress />;

  return (
    <>
      <DeleteDialog
        handleClose={handleCloseDeleteDialog}
        id={selectedRestaurant.restaurant_id}
        name={selectedRestaurant.name}
        open={deleteDialogOpen}
      />
      <EditDialog
        handleClose={handleCloseEditDialog}
        open={dialogOpen}
        restaurant={selectedRestaurant}
      />
      <TableContainer component={Paper}>
        <Table aria-label='Table containing a list of restaurants'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='right'>Category</TableCell>
              <TableCell align='right'>Rating</TableCell>
              <TableCell align='right'>Last Visit</TableCell>
              <TableCell align='right'>Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {restaurants?.map(restaurant => (
              <TableRow key={restaurant.restaurant_id}>
                <TableCell>{restaurant.name}</TableCell>
                <TableCell align='right'>{restaurant.category}</TableCell>
                <TableCell align='right'>
                  <Rating readOnly value={restaurant.rating}/>
                </TableCell>
                <TableCell align='right'>
                  {restaurant.last_visit?.toLocaleDateString('en-US') || 'Never Been'}
                </TableCell>
                <TableCell align='right'>
                  <Button onClick={() => handleEditClick(restaurant)}>Edit</Button>
                  <Button color='error' onClick={() => handleDeleteClick(restaurant)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </> 
  );
};

export default RestaurantList;