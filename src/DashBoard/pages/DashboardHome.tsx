import React, { useEffect, useState } from 'react'
import { FaCircle, FaIcons, FaShieldAlt, FaSpinner, FaSubscript, FaUser } from 'react-icons/fa'
import DashboardCard from '../components/common/DashboardCard'
import Chart from '../components/common/Chart'
import { api } from '../Api'
import { useAdminContext } from '../components/DashboardContextProvider'
import { camelCaseToWords, commonCSS } from '../components/utils'

export const DashboardHome = () => {

  const [loading, setLoading] = useState(false);
  const { dashboardData, addDashboardData } = useAdminContext()

  useEffect(() => {
    if (!dashboardData) getData();
  }, []);

  async function getData() {
    setLoading(true);
    try {
      const { status, resStatus, resMsg } = await api.getDashboardData();
      if (resStatus) {
        addDashboardData(resMsg);
      } else {
        toast.error(resMsg);
      }
    } catch (error) {
      toast.error(`An error occurred while getting data: ${error.message}`);
    }
    setLoading(false);
  }

  const iconMap = {
    totalUsers: <FaUser className={commonCSS().icon} />,
    totalSub: <FaSubscript className={commonCSS().icon} />,
    totalAdmins: <FaShieldAlt className={commonCSS().icon} />
  };
  
  const [dashboardCards, setDashboardCards] = useState(null);
  if (dashboardData) {
    setTimeout(() => {
      setDashboardCards(Object.entries(dashboardData).map(([key, value]) => (
        <DashboardCard key={key} title={camelCaseToWords(key)} total={value}>
          {iconMap[key] || <FaCircle className={commonCSS().icon}/>}
        </DashboardCard>
      )));
    }, 4000)


  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        {dashboardCards ? dashboardCards : <><LoadingDashboardCard /><LoadingDashboardCard /><LoadingDashboardCard /></>}
      </div>

      <div className="mt-4 flex flex-col gap-5">
        {dashboardData && <Chart totalUsers={dashboardData.totalUsers} totalAdmins={dashboardData.totalAdmins} totalAmategeko={dashboardData.totalAmategeko} totalIbyapa={dashboardData.totalIbyapa} totalSub={dashboardData.totalSub} totalQuiz={dashboardData.totalQuiz} />}
      </div>

    </div>

  )
}

const LoadingDashboardCard = () => {
  return (
    <div className="rounded-xl border border-stroke flex flex-col items-center justify-center bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark animate-pulse">

      <div className="flex h-16 w-32 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <FaSpinner className='fill-primary dark:fill-white w-22 animate-spin'/>
      </div>

      <div className="mt-4 flex justify-between gap-6 flex-col items-center">
        <span className="relative flex h-8 w-32">
          <span className="absolute text-white rounded-full h-full w-full bg-sky-500 flex justify-center items-center text-sm">Total</span>
        </span>
        <span className="text-sm font-medium">Loading Statistics</span>
      </div>
    </div>
  )
}