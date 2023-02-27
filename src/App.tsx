import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import Navbar from './navbar';

function App() {
  return (
   
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    
  );
}

export default App;
