import { FaTasks, FaPlusSquare, FaBullhorn, FaEdit } from 'react-icons/fa';

const sidebarData = [
  {
    title: "Projects",
    subSidebars: [
      {
        subTitle: "View Projects",
        icon: <FaTasks />,
        lnk: "/admin/projects"
      },
      {
        subTitle: "Add Project",
        icon: <FaPlusSquare />,
        lnk: "/admin/addProject"
      },
    ]
  },
  {
    title: "Announcements",
    subSidebars: [
      {
        subTitle: "View Announcements",
        icon: <FaBullhorn />,
        lnk: "/admin/announcements"
      },
      {
        subTitle: "Add Announcement",
        icon: <FaEdit />,
        lnk: "/admin/addAnnouncement"
      }
    ]
  }
];

export default sidebarData;