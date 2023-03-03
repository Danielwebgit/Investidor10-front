import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import Layout from './layout';
import Pages from './pages';

function App() {
  return (
   
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>    
  );
}

export default App;
