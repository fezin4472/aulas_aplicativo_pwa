import './App.css'
import Header from './komponenten/Header/Header'
import Footer from './komponenten/Footer/Footer'
import Roteador from './ROTEADOR';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Header />
      <Roteador />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
