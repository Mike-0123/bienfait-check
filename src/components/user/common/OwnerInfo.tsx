import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'
import constants from '../../../constants'
import { Link } from 'react-router-dom'

const OwnerInfo = () => {
    return (
        <div className="bg-gradient-to-b from-textColor via-textColor to-textColorTransparent text-bgColor w-full flex justify-center gap-4 md:gap-6 lg:gap-10 pt-1 text-xs lg:text-sm">
                <Link className="flex gap-2 items-center" target='_blank' to={`tel:+250${constants.webInfo.phone}`} ><FaPhoneAlt /> <span>+(250){constants.webInfo.phone}</span></Link>
                <div className="flex gap-2 items-center"><FaLocationPin /> <span>{constants.webInfo.location}</span></div>
                <Link className="hidden md:flex gap-2 items-center" target='_blank' to={`mailto:${constants.webInfo.email}`}><FaEnvelope /> <span>{constants.webInfo.email}</span></Link>
        </div>
    )
}

export default OwnerInfo