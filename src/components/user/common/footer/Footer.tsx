import { Link, useNavigate } from "react-router-dom"
import constants from "../../../../constants"
import SocialMedia from "../shared/SocialMedia"
import { footerImg } from "../../assets"

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="h-64 gap-4 w-full bg-cover bg-center flex flex-col  justify-center items-center text-bgColor" style={{ backgroundImage: `url(${footerImg})` }}>
        <h1 className="text-4xl">HAVE A VISION?</h1>
        <p className="text-middleColor text-lg">We can make it {constants.webInfo.name}</p>
        <button className="bg-textColor px-4 py-3 rounded-md hover:bg-shineColor" onClick={()=>navigate('/contact')}>CONTACT US NOW</button>
      </div>
      <div className="bg-textColor text-bgColor h-64 flex flex-col justify-center items-center gap-10">
        <h1 className="text-2xl uppercase">{constants.webInfo.name}</h1>
        <div className="flex gap-8">
          {constants.navLinks.map(link => (<Link key={link.lnk} to={link.lnk} className={`uppercase hover:text-bgColor text-middleColor hover:}`}>{link.name}</Link>))}
        </div>
        <SocialMedia />
        <p>&copy; {constants.webInfo.name} {new Date().getFullYear()}</p>
      </div>

    </div>
  )
}

export default Footer