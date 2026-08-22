import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import {AppRoutes} from "./routes/routes";
import Layout from "../pages/layout/layout";
import { ScrollTop } from "src/shared/scroll-top";
import "src/styles/global.scss";

const App = (): React.ReactNode => {
  const router = createBrowserRouter([
    {
      path: AppRoutes.Main,
      element: (
        <>
          <Layout />
          <ScrollTop />
        </>
      ),
    //   children: [
    //     {
    //       path: AppRoutes.Main,
    //       element: <MainPageLazy />,
    //     },
    //     {
    //       path: AppRoutes.Repair,
    //       element: <RepairPageLazy />,
    //     },
    //     {
    //       path: AppRoutes.Sevice,
    //       element: <ServicePageLazy />,
    //     },
    //     {
    //       path: AppRoutes.Rvd,
    //       element: <RvdPageLazy />,
    //     },
    //     {
    //       path: AppRoutes.Diagnostics,
    //       element: <PageDiagnosticsLazy />,
    //     },
    //     {
    //       path: AppRoutes.NotFound,
    //       element: <PageNotFoundLazy />
    //     }
    //   ],
    },
  ]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;