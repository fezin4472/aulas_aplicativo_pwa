import HOMEPAGE from "./pages/HomePage/HomePage";
import PAGEPRODUCTSLIST from "./pages/PageProductsList/PageProductsList";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PAGETASKSLIST from "./pages/PageTasksList/PageTasksList";
import REGISTERPAGE from "./pages/RegisterPage/RegisterPage";


const roteador = createBrowserRouter([
    {
        path: "",
        element: <HOMEPAGE />,
    },
    {
        path: "products-list",
        element: <PAGEPRODUCTSLIST />,
    },
    {
        path: "tasks-list",
        element: <PAGETASKSLIST />,
    },
    {
        path: "register",
        element: <REGISTERPAGE />
    }
]);

function Roteador() {
    return <RouterProvider router={roteador} />;
}

export default Roteador;