import { Outlet } from "react-router-dom"
import Footer from "./components/user/common/Footer"
import Navbar from "./components/user/common/Navbar"
import WhatsAppButton from "./components/user/common/WhatsAppButton"

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