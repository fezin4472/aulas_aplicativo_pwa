import './App.css'
import Header from './komponenten/Header/Header'
import Main from './komponenten/Voornaamst/Main'
import Footer from './komponenten/Footer/Footer'
import HOMEPAGE from './pages/HomePage/HomePage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const roteador = createBrowserRouter([
  {
    path: "",
    element: <HOMEPAGE />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={roteador} />
      <Footer />
    </>
  );
}

export default App
