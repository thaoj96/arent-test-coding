import { useRoutes } from "react-router-dom";
import MainLayout from "../layout";
import loadable from "./loadable";
const Home = loadable(() => import("../Pages/Home"));
const Detail = loadable(() => import("../Pages/Detail"));
const ViewList = loadable(() => import("../Pages/ViewList"));

const MainRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      children: [
        {
          path: "",
          element: <MainLayout name="" />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "/detail",
              element: <Detail />,
            },
            {
              path: "/list",
              element: <ViewList />,
            },
          ],
        },
        {
          path: "/403",
          //  element: <Page403 />
        },
        {
          path: "*",
          // element: <Page404 />,
        },
      ],
    },
  ]);
  return element;
};
export default MainRoutes;
