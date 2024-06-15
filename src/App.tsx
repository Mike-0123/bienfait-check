import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/user/pages/Home"
import About from "./components/user/pages/About"
import Contact from "./components/user/pages/Contact"
import Portfolio from "./components/user/pages/Portfolio"
import Page404 from "./components/user/common/shared/Page404"
import User from "./User"
import Join from "./components/user/pages/Join"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dashboard from "./DashBoard/Dashboard";
import DashboardHome from "./DashBoard/pages/DashboardHome";
import DashboardLogin  from "./DashBoard/pages/DashboardLogin";
import AdddProject from "./DashBoard/pages/AddProject";
import AddAnnouncement from "./DashBoard/pages/AddAnnouncement";
import AdminAnnouncements from "./DashBoard/pages/AdminAnnouncements";
import AdminProjects from "./DashBoard/pages/AdminProjects";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();


function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="join" element={<Join />} />
          <Route path="*" element={<Page404 />} />
        </Route>
        <Route path="/admin" element={<Dashboard />}>
          <Route path="" element={<DashboardHome />} />
          <Route path="login" element={<DashboardLogin />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="addProject" element={<AdddProject />} />
          <Route path="announcements" element={<AdminAnnouncements />} />
          <Route path="addAnnouncement" element={<AddAnnouncement />} />
        </Route>
      </Routes>
      <ToastContainer limit={3} />
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
