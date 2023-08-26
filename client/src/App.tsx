import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Routing from './routes/Routing';
import ModalProvider from './components/common/ModalProvider';

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ModalProvider>
        <Routing />
      </ModalProvider>
    </BrowserRouter>
  );
};

export default App;
