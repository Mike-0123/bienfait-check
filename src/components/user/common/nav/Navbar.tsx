import { Link } from "react-router-dom"
import constants from "../../../../constants"
import { logo } from "../../assets"
import { useLocation } from 'react-router-dom'
import CountryDropdown from "./CountryDropdown"
import SocialMedia from "../shared/SocialMedia"
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react"
import OwnerInfo from "./OwnerInfo"

const Navbar = () => {
  const currentPath = useLocation().pathname;
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="sticky top-0 z-30">
    <OwnerInfo />
    <div className="bg-textColorTransparent text-bgColor w-full flex justify-between items-center h-14 px-4">
      <div className="flex gap-1 items-center justify-center text-sm text-shineColor"><img src={logo} className="w-8 md:w-12 lg:w-16" />{constants.webInfo.name}</div>
      <div className="gap-8 hidden lg:flex">
        {constants.navLinks.map(link => (<Link key={link.lnk} to={link.lnk} className={`uppercase hover:text-shineColor ${currentPath === link.lnk ? 'text-shineColor' : 'text-middleColor'}`}>{link.name}</Link>))}
      </div>
      <div className="flex gap-6 items-center justify-center">
        <SocialMedia className="hidden lg:flex" />
        <CountryDropdown />
      </div>
      <div className="flex lg:hidden">
        {!showMenu ?
          <FaBars size={32} className="text-middleColor" onClick={() => setShowMenu(!showMenu)} /> :
          <FaTimes size={32} className="text-middleColor" onClick={() => setShowMenu(!showMenu)} />
        }
      </div>
      {showMenu && <div
        className="w-full h-[90vh] gap-10 py-20 flex flex-col lg:hidden absolute top-full left-0 
      bg-textColorTransparent justify-evenly items-center
      ">
        {constants.navLinks.map(link => (<Link key={link.lnk} to={link.lnk} className={`uppercase text-3xl hover:text-shineColor ${currentPath === link.lnk ? 'text-shineColor' : 'text-middleColor'}`}>{link.name}</Link>))}
        <SocialMedia className="lg:hidden" />
      </div>}
    </div>
    </div>
  )
}

export default Navbar