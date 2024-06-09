import { Outlet } from "react-router-dom"
import Footer from "./components/user/common/footer/Footer"
import Navbar from "./components/user/common/nav/Navbar"
import WhatsAppButton from "./components/user/common/shared/WhatsAppButton"

const User = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <WhatsAppButton />
            <Footer />
        </div>
    )
}

export default User