import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarLinkGroup from './SidebarLinkGroup';
import { FaChartBar, FaChevronDown, FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import { useAdminContext } from '../DashboardContextProvider';
import AdminAuth from '../common/AdminAuth'
import { dashboardInfo, sidebarData } from '../../data';
const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { isAdminLoggedIn } = useAdminContext()
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );


  function checkLinkActive(...paths) {
    return paths.some(path => pathname === path);
  }
  

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);


  return (
    <AdminAuth>
      <aside
        ref={sidebar}
        className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
          <NavLink to={`/${dashboardInfo.startRouteLink}`}>
            <img src={dashboardInfo.logoImg} alt="Logo" className='w-15' />
          </NavLink>

          <button
            ref={trigger}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
            className="block lg:hidden"
          >
            <FaChevronLeft />

          </button>


        </div>

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
            <div>

              <ul className="mb-6 flex flex-col gap-1.5">
                <li>
                  <NavLink to={`${dashboardInfo.startRouteLink}`} className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${checkLinkActive(dashboardInfo.startRouteLink) && 'bg-graydark dark:bg-meta-4'}`}>
                    <FaChartBar /> Dashboard
                  </NavLink>
                </li>
              </ul>

              {sidebarData.map((sidebarItem, index) => (
                <React.Fragment key={`sidebar${index}`}>
                  <h3 className="mb-2 ml-4 text-sm font-semibold text-bodydark2">
                    {sidebarItem.title}
                  </h3>

                  <ul className="mb-6 flex flex-col gap-1.5">
                    {sidebarItem.subSidebars.map((subSidebar, index) => {
                      const hasSub = subSidebar.hasOwnProperty('subSubSidebar');
                      return (
                        hasSub ?
                          (
                            <SidebarLinkGroup activeCondition={checkLinkActive(subSidebar.lnk)} key={`subSubSidebar${index}`}>
                              {(handleClick, open) => {
                                const subSubLinks = subSidebar.subSubSidebar.map((item) => item.subLnk);
                                return (
                                  <React.Fragment>
                                    <NavLink
                                      to="#"
                                      className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 
                                ${checkLinkActive(...subSubLinks) && 'bg-graydark dark:bg-meta-4'}`}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        sidebarExpanded
                                          ? handleClick()
                                          : setSidebarExpanded(true);
                                      }}
                                    >
                                      {subSidebar.icon} {subSidebar.subTitle} {!open ? <FaChevronRight className='absolute right-4 top-1/2 -translate-y-1/2 fill-current' /> : <FaChevronDown className='absolute right-4 top-1/2 -translate-y-1/2 fill-current' />}
                                    </NavLink>
                                    <div
                                      className={`translate transform overflow-hidden ${!open && 'hidden'
                                        }`}
                                    >
                                      <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                                        {subSidebar.subSubSidebar.map((subSubSidebarItem, index) => (
                                          <li key={`subSubSidebarLi${index}`}>
                                            <NavLink
                                            key={`subSubSidebarLink${index}`}
                                              to={subSubSidebarItem.subLnk}
                                              className={({ isActive }) =>
                                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                                (isActive && '!text-white')
                                              }
                                            >
                                              {subSubSidebarItem.subSubTitle}
                                            </NavLink>
                                          </li>
                                        ))}

                                      </ul>
                                    </div>
                                  </React.Fragment>
                                );
                              }}
                            </SidebarLinkGroup>
                          ) :
                          (
                            <li key={`sidebarLi${index}`}>
                              <NavLink to={subSidebar.lnk} className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${checkLinkActive(subSidebar.lnk) && 'bg-graydark dark:bg-meta-4'}`}>
                                {subSidebar.icon} {subSidebar.subTitle}
                              </NavLink>
                            </li>
                          )
                      )
                    })}
                  </ul>
                </React.Fragment>
              ))}

            </div>
          </nav>
        </div>
      </aside>
    </AdminAuth>
  );
};

export default Sidebar;
