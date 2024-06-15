import React, { createContext, useContext, useState } from 'react';
import useLocalState from './hooks/useLocalState';
import { dashboardInfo } from '../data'

const AdminContext = createContext();

export const useAdminContext = () => useContext(AdminContext);

export const AdminContextProvider = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useLocalState(`is${dashboardInfo.localStoragePrefix}LoggedIn`, false);
  const [loggedInAdmin, setLoggedInAdmin] = useLocalState(`loggedIn${dashboardInfo.localStoragePrefix}`, null);

  const [dashboardData, setDashboardData] = useState(null)
  const [users, setUsers] = useState(null)

  const addDashboardData = (data) =>{
    setDashboardData(data);
  }

  
  const addUsers = (data) =>{
    setUsers(data)
  }

  const loginAdmin = (admin) => {
    setLoggedInAdmin(admin);
    setIsAdminLoggedIn(true);
  };

  const logoutAdmin = () => {
    setLoggedInAdmin(null);
    setIsAdminLoggedIn(false);
  };

  return (
    <AdminContext.Provider value={{
       isAdminLoggedIn, loggedInAdmin, loginAdmin, logoutAdmin, dashboardData, addDashboardData, users, addUsers
       }}>
      {children}
    </AdminContext.Provider>
  );
};
