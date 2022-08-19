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

import { useQuery } from '@tanstack/react-query';

import { getAllRestaurants } from '../api';

const RestaurantList = () => {
  const { data: restaurants, isLoading } = useQuery(['restaurants'], getAllRestaurants);

  if (isLoading) return <CircularProgress />;

  return (
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
            <TableRow key={restaurant.restaurant_id}>
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
  );
};

export default RestaurantList;