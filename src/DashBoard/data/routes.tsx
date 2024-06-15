import { DashboardLogin } from "../pages/DashboardLogin";
import { Page404 } from "../pages/Page404";
import { Dashboard } from "../Dashboard";
import { dashboardInfo } from "./data";
import { DashboardHome } from "../pages/DashboardHome";

const routes = [
  {
    path: `${dashboardInfo.startRouteLink}`, element: ()=> <Dashboard />, 
    children: 
    [
      { path: '', element: ()=> <DashboardHome /> },
      { path: 'login', element: ()=> <DashboardLogin /> }
    ]
  }
];



export {routes};