import {Box, Button, Container, CssBaseline} from '@mui/material';
import {RestaurantList} from './components';

function App() {

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth='lg'>
        <Box sx={{ display: 'flex', flexDirection: 'column', margin: '10% 2%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '3% 0' }}>
            <Button variant='contained'>Roll A Restaurant</Button>
            <Button variant='contained'>Add New Restaurant</Button>
          </Box>
          <RestaurantList />
        </Box>
      </Container>
    </div>
  );
};

export default App;