import HOMEPAGE from "./pages/HomePage/HomePage";
import PAGEPRODUCTSLIST from "./pages/PageProductsList/PageProductsList";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


const roteador = createBrowserRouter([
    {
        path: "",
        element: <HOMEPAGE />,
    },
    {
        path: "products-list",
        element: <PAGEPRODUCTSLIST />,
    },
]);

function Roteador() {
    return <RouterProvider router={roteador} />;
}

export default Roteador;