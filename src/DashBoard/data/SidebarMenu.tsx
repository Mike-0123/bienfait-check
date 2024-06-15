import { FaBook, FaChartBar, FaRoad} from 'react-icons/fa'

const sidebarData = [
    {
      title: "Section 1",
      subSidebars: [
        {
          subTitle: "Sec a",
          icon: <FaBook />,
          lnk: "/admin/seca",
          subSubSidebar: [
            {
              subSubTitle: "D2",
              subLnk: "/admin/aa1"
            },
            {
              subSubTitle: "D5",
              subLnk: "/admin/aa2"
            }
          ]
        },
        {
          subTitle: "Sec b",
          icon: <FaChartBar />,
          lnk: "/admin/secb"
        }
      ]
    },
    {
      title: "Section 2",
      subSidebars: [
        {
          subTitle: "Der1",
          icon: <FaRoad />,
          lnk: "/admin/da1",
          subSubSidebar: [
            {
              subSubTitle: "D2",
              subLnk: "/admin/ama1"
            },
            {
              subSubTitle: "D5",
              subLnk: "/admin/ama2"
            }
          ]
        },
        {
          subTitle: "Amategeko",
          icon: <FaBook />,
          lnk: "/admin/amategeko"
        }
      ]
    }
  ];

export default sidebarData;
