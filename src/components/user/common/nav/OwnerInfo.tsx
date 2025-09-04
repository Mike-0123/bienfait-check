import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'
import { BsPatchCheckFill } from 'react-icons/bs' // better verified badge
import constants from '../../../../constants'
import { Link } from 'react-router-dom'

const OwnerInfo = () => {
    return (
        <div className="bg-gradient-to-b from-textUserColor via-textUserColor to-textColorTransparent text-bgUserColor w-full flex justify-center gap-4 md:gap-6 lg:gap-10 pt-1 text-xs lg:text-sm">
                <Link className="flex gap-2 items-center" target='_blank' to={`tel:+250${constants.webInfo.phone}`} ><FaPhoneAlt /> <span>+(250){constants.webInfo.phone}</span></Link>
                <div className="flex gap-2 items-center"><FaLocationPin /> <span>{constants.webInfo.location}</span></div>
                <Link className="hidden md:flex gap-2 items-center" target='_blank' to={`mailto:${constants.webInfo.email}`}><FaEnvelope /> <span>{constants.webInfo.email}</span></Link>
                
                {/* Verified badge */}
                <Link 
                    className="hidden md:flex items-center gap-1 px-2 py-0.5 bg-white border border-red-600 text-red-600 rounded-full font-semibold text-xs"
                    target='_blank' 
                    to="https://www.engineersrwanda.rw/ier-compliant-firms"
                >
                    <BsPatchCheckFill size={16} /> <span>Verified</span>
                </Link>
        </div>
    )
}

export default OwnerInfo
