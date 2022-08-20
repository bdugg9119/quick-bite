import {
  CircularProgress,
  IconButton,
  Paper,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getAllRestaurants } from '../api';
import RestaurantModal from './RestaurantModal';
import { nullRestaurant } from '../static/utils';
import { Restaurant } from '../static/types';

const RestaurantList = () => {
  const { data: restaurants, isLoading } = useQuery(['restaurants'], getAllRestaurants);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant>(nullRestaurant);

  const handleRowClick = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setDialogOpen(true);
  }

  if (isLoading) return <CircularProgress />;

  return (
    <>
      <RestaurantModal open={dialogOpen} restaurant={selectedRestaurant} />
      <TableContainer component={Paper}>
        <Table aria-label='Table containing a list of restaurants'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='right'>Category</TableCell>
              <TableCell align='right'>Rating</TableCell>
              <TableCell align='right'>Last Visit</TableCell>
              <TableCell align='right'>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {restaurants?.map(restaurant => (
              <TableRow
                key={restaurant.restaurant_id}
                onClick={() => handleRowClick(restaurant)}
              >
                <TableCell>{restaurant.name}</TableCell>
                <TableCell align='right'>{restaurant.category}</TableCell>
                <TableCell align='right'>
                  <Rating readOnly value={restaurant.rating}/>
                </TableCell>
                <TableCell align='right'>{restaurant.last_visit?.toLocaleDateString('en-US') || 'Never Been'}</TableCell>
                <TableCell align='right'>
                  <IconButton aria-label='delete' color='error'>
                    <DeleteIcon />
                  </IconButton>
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