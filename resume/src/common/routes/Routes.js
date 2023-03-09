import {createBrowserRouter} from "react-router-dom";
import App from "../../App";
import {AppRoutes} from "./AppRoutes";
import Webdev_1 from "../../components/webdev_1/Webdev_1";
import Ux_1 from "../../components/ux_1/Ux_1";


export const router = createBrowserRouter([
    {
        path: AppRoutes.MAIN,
        element: <App />,
        errorElement: <h1>NOT FOUND</h1>,
    },
    {
            path: AppRoutes.DEV,
            element: <Webdev_1 />,
            errorElement: <h1>NOT FOUND</h1>,
        },
        {
            path: AppRoutes.UX,
            element: <Ux_1/>,
            errorElement: <h1>NOT FOUND</h1>,
        },
]);