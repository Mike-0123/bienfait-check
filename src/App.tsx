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
import { routes } from "./DashBoard/data";


function App() {

  return (
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
        {routes.map(({ path, element, children }) => (
          <Route key={path} path={path} element={element()}>
            {children && children.map(({ path: childPath, element: childElement }) => (
              <Route key={childPath} path={childPath} element={childElement()} />
            ))}
          </Route>
        ))}
      </Routes>
      <ToastContainer limit={3} />
    </BrowserRouter>
  )
}

export default App
