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


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />}>
          <Route path="" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="portfolio" element={<Portfolio />}/>
          <Route path="join" element={<Join />}/>
          <Route path="*" element={<Page404 />}/>
        </Route>
      </Routes>
      <ToastContainer limit={3}/>
    </BrowserRouter>
  )
}

export default App
