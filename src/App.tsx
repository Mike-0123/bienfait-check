import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/user/pages/Home"
import About from "./components/user/pages/About"
import Contact from "./components/user/pages/Contact"
import Portfolio from "./components/user/pages/Portfolio"
import Page404 from "./components/user/common/Page404"
import User from "./User"
import Join from "./components/user/pages/Join"

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
    </BrowserRouter>
  )
}

export default App
