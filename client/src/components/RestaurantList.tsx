import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";

import { Restaurant, RestaurantCategory } from "../static/types";

const RestaurantList = () => {
  const restaurants: Restaurant[] = [{
    category: RestaurantCategory.Italian,
    id: 1,
    last_visit: new Date(),
    name: "Gino's Italian Eatery",
    rating: 2
  }];

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
            <TableRow key={restaurant.id}>
              <TableCell>{restaurant.name}</TableCell>
              <TableCell align='right'>{restaurant.category}</TableCell>
              <TableCell align='right'>{restaurant.rating}</TableCell>
              <TableCell align='right'>{restaurant.last_visit?.toString()}</TableCell>
              <TableCell align='right'>
                <Button
                  color='error'
                  variant='contained'
                >

                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RestaurantList;