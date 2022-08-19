import {Box, Button, Container, CssBaseline} from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


import {RestaurantList} from './components';

const queryClient = new QueryClient();

function App() {

  return (
    <div className="App">
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <Container maxWidth='lg'>
          <Box sx={{ display: 'flex', flexDirection: 'column', margin: '10% 2%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '3% 0' }}>
              <Button variant='contained'>Pick A Restaurant</Button>
              <Button variant='contained'>Add New Restaurant</Button>
            </Box>
            <RestaurantList />
          </Box>
        </Container>
      </QueryClientProvider>
    </div>
  );
};

export default App;