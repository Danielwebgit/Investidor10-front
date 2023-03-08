import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import Layout from './layout';

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
