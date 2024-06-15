import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/user/pages/Home';
import About from './components/user/pages/About';
import Contact from './components/user/pages/Contact';
import Portfolio from './components/user/pages/Portfolio';
import Page404 from './components/user/common/shared/Page404';
import User from './User';
import Join from './components/user/pages/Join';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Loading from './components/user/common/shared/Loading';

const Dashboard = React.lazy(() => import('./DashBoard/Dashboard'));
const DashboardHome = React.lazy(() => import('./DashBoard/pages/DashboardHome'));
const DashboardLogin = React.lazy(() => import('./DashBoard/pages/DashboardLogin'));
const AddProject = React.lazy(() => import('./DashBoard/pages/AddProject'));
const AddAnnouncement = React.lazy(() => import('./DashBoard/pages/AddAnnouncement'));
const AdminAnnouncements = React.lazy(() => import('./DashBoard/pages/AdminAnnouncements'));
const AdminProjects = React.lazy(() => import('./DashBoard/pages/AdminProjects'));

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
          <Route path="/admin" element={<Suspense fallback={<Loading />}><Dashboard /></Suspense>}>
            <Route path="" element={<Suspense fallback={<Loading />}><DashboardHome /></Suspense>} />
            <Route path="login" element={<Suspense fallback={<Loading />}><DashboardLogin /></Suspense>} />
            <Route path="projects" element={<Suspense fallback={<Loading />}><AdminProjects /></Suspense>} />
            <Route path="addProject" element={<Suspense fallback={<Loading />}><AddProject /></Suspense>} />
            <Route path="announcements" element={<Suspense fallback={<Loading />}><AdminAnnouncements /></Suspense>} />
            <Route path="addAnnouncement" element={<Suspense fallback={<Loading />}><AddAnnouncement /></Suspense>} />
          </Route>
        </Routes>
        <ToastContainer limit={3} />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;