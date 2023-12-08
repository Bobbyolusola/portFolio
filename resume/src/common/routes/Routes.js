import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { AppRoutes } from "./AppRoutes";
import Webdev_1 from "../../components/webdev_1/Webdev_1";
import Ux_1 from "../../components/ux_1/Ux_1";
import Webdev_2 from "../../components/webdev_2/Webdev_2";
import Webdev_3 from "../../components/webdev_3/Webdev_3";
import Webdev_4 from "../../components/webdev_4/Webdev_4";
import Design from "../../components/design/Design";
import Daily from "../../components/uxui/Daily";
import LandingPages from "../../components/landingPages/LandingPages";

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
    path: AppRoutes.DEV2,
    element: <Webdev_2 />,
    errorElement: <h1>NOT FOUND</h1>,
  },
  {
    path: AppRoutes.DEV3,
    element: <Webdev_3 />,
    errorElement: <h1>NOT FOUND</h1>,
  },
  {
    path: AppRoutes.DEV4,
    element: <Webdev_4 />,
    errorElement: <h1>NOT FOUND</h1>,
  },

  {
    path: AppRoutes.UX,
    element: <Ux_1 />,
    errorElement: <h1>NOT FOUND</h1>,
  },
  {
    path: AppRoutes.DESIGN,
    element: <Design />,
    errorElement: <h1>NOT FOUND</h1>,
  },
  {
    path: AppRoutes.DAILY,
    element: <Daily />,
    errorElement: <h1>NOT FOUND</h1>,
  },
  {
    path: AppRoutes.LANDING,
    element: <LandingPages />,
    errorElement: <h1>NOT FOUND</h1>,
  },
]);
