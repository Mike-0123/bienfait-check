import { createContext, useContext, useState } from 'react';
import useLocalState from './hooks/useLocalState';
import { dashboardInfo } from '../data'

const AdminContext = createContext();

export const useAdminContext = () => useContext(AdminContext);

export const AdminContextProvider = ({ children }: {children: any}) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useLocalState(`is${dashboardInfo.localStoragePrefix}LoggedIn`, false);
  const [loggedInAdmin, setLoggedInAdmin] = useLocalState(`loggedIn${dashboardInfo.localStoragePrefix}`, null);

  const [dashboardData, setDashboardData] = useState(null)
  const [projects, setProjects] = useState(null)
  const [announcements, setAnnouncements] = useState(null)

  const addDashboardData = (data: any) =>{
    setDashboardData(data);
  }

  
  const addProjects = (data: any) =>{
    setProjects(data)
  }

  const addAnnouncements = (data: any) =>{
    setAnnouncements(data)
  }

  const loginAdmin = (admin: any) => {
    setLoggedInAdmin(admin);
    setIsAdminLoggedIn(true);
  };

  const logoutAdmin = () => {
    setLoggedInAdmin(null);
    setIsAdminLoggedIn(false);
  };

  return (
    <AdminContext.Provider value={{
       isAdminLoggedIn, loggedInAdmin, loginAdmin, logoutAdmin, dashboardData, addDashboardData,
       projects, addProjects, announcements, addAnnouncements
       }}>
      {children}
    </AdminContext.Provider>
  );
};
