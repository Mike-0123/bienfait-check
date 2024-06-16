import { Link, useNavigate } from "react-router-dom"
import constants from "../../../../constants"
import SocialMedia from "../shared/SocialMedia"
import { footerImg } from "../../assets"

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="h-80 gap-4 w-full bg-cover bg-center flex flex-col  justify-center items-center text-bgUserColor" style={{ backgroundImage: `url(${footerImg})` }}>
        <h1 className="text-4xl">HAVE A VISION?</h1>
        <p className="text-middleColor text-lg">We can make it {constants.webInfo.name}</p>
        <button className="bg-textUserColor px-4 py-3 rounded-md hover:bg-shineColor" onClick={()=>navigate('/contact')}>CONTACT US NOW</button>
      </div>
      <div className="bg-textUserColor text-bgUserColor h-64 flex flex-col justify-center items-center gap-10">
        <h1 className="text-2xl uppercase">{constants.webInfo.name}</h1>
        <div className="flex gap-8">
          {constants.navLinks.map(link => (<Link key={link.lnk} to={link.lnk} className={`uppercase hover:text-bgUserColor text-middleColor hover:}`}>{link.name}</Link>))}
        </div>
        <SocialMedia />
        <p className="text-gray-700 flex flex-col lg:flex-row justify-center items-center gap-2 mb-5"><span>&copy; {constants.webInfo.name} {new Date().getFullYear()} </span> <span className="hidden lg:flex"> || </span><span className="text-gray-600">Developed by <Link target="_blank" to="https://programmerdatch.netlify.app/" className="hover:text-shineColor">ProgrammerDATCH</Link></span></p>
      </div>

    </div>
  )
}

export default Footer