import { Outlet } from "react-router-dom"

const Admin = () => {
  return (
    <div className="">
        <div className="">NavBar</div>
        <Outlet />
    </div>
  )
}

export default Admin