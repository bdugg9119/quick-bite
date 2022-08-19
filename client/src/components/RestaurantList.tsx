import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const RestaurantList = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='A table containing a list of restaurants'>
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

        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RestaurantList;