import { Outlet } from "react-router-dom"
import Footer from "./components/user/common/footer/Footer"
import Navbar from "./components/user/common/nav/Navbar"
import WhatsAppButton from "./components/user/common/shared/WhatsAppButton"
import { bg } from "./components/user/assets"

const User = () => {
    return (
        <div className="bg-auto bg-center" style={{ backgroundImage: `url(${bg})` }}>
            <Navbar />
            <Outlet />
            <WhatsAppButton />
            <Footer />
        </div>
    )
}

export default User