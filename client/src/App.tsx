import {
  Box,
  Container,
  CssBaseline
} from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


import {RestaurantList, TopButtons} from './components';

const queryClient = new QueryClient();

function App() {

  return (
    <div className="App">
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <Container maxWidth='lg'>
          <Box sx={{ display: 'flex', flexDirection: 'column', margin: '10% 2%' }}>
            <TopButtons />
            <RestaurantList />
          </Box>
        </Container>
      </QueryClientProvider>
    </div>
  );
};

export default App;