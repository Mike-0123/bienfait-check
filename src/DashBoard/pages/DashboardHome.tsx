import { useEffect, useState } from 'react'
import { FaBullhorn, FaCircle, FaSpinner, FaTasks } from 'react-icons/fa'
import DashboardCard from '../components/common/DashboardCard'
import Chart from '../components/common/Chart'
import { camelCaseToWords, commonCSS } from '../components/utils'
import { useGetDashboardData } from '../Api/adminAPI'

const DashboardHome = () => {

  const {data, error, isLoading} = useGetDashboardData();

  // @ts-ignore
  const [dashboardCards, setDashboardCards] = useState<any>(null);

  const iconMap: any = {
    totalProjects: <FaTasks className={commonCSS().icon} />,
    totalAnnouncements: <FaBullhorn className={commonCSS().icon} />
  };

  useEffect(() => {
    if (data) {
      setDashboardCards(Object.entries(data).map(([key, value]) => (
        <DashboardCard key={key} title={camelCaseToWords(key)} total={value}>
          {iconMap[key] || <FaCircle className={commonCSS().icon} />}
        </DashboardCard>
      )));

    }
  }, [data]);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen"><FaSpinner className="animate-spin text-5xl" /></div>;
  }

  if (error) {
    return <div className="text-center text-red-600">Error loading projects: {error.message}</div>;
  }


return (
  <div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10">
      {dashboardCards ? dashboardCards : <><LoadingDashboardCard /><LoadingDashboardCard /></>}
    </div>

    <div className="mt-4 flex flex-col gap-5">
      {!isLoading && !error && <Chart totalProjects={data.totalProjects} totalAnnouncements={data.totalAnnouncements} />}
    </div>

  </div>

)
}

const LoadingDashboardCard = () => {
  return (
    <div className="rounded-xl border border-stroke flex flex-col items-center justify-center bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark animate-pulse">

      <div className="flex h-16 w-32 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <FaSpinner className='fill-primary dark:fill-white w-22 animate-spin' />
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

export default DashboardHome