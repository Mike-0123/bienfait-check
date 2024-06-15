import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminContext } from '../DashboardContextProvider';
import { dashboardInfo } from '../../data';

function AdminAuth({ children }) {
  const { isAdminLoggedIn, loggedInAdmin } = useAdminContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminLoggedIn || !loggedInAdmin) navigate(`${dashboardInfo.startRouteLink}/login`);
  }, [isAdminLoggedIn, loggedInAdmin, navigate]);

  return (
    <>
      {isAdminLoggedIn ? children : null}
    </>
  );
}

export default AdminAuth;