import {Container, CssBaseline} from '@mui/material';
import {RestaurantList} from './components';

function App() {

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth='lg'>
        Hello
        <RestaurantList />
      </Container>
    </div>
  )
}

export default App
