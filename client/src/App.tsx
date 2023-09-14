import { BrowserRouter } from 'react-router-dom';
import Routing from './routes/Routing';
import { ModalProvider } from './components/common/modal/ModalProvider';

const App = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Routing />
      </ModalProvider>
    </BrowserRouter>
  );
};

export default App;
