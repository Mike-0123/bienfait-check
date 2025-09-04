import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { BsPatchCheckFill } from "react-icons/bs" // better verified badge
import { ISocialMedia } from '../../../types'

export const socialMediaLinks = {
    twitter: 'https://x.com/SpartialEnginer',
    facebook: 'https://www.facebook.com/profile.php?id=100077757162113',
    instagram: 'https://www.instagram.com/spartial_engineering_group',
    verified: 'https://www.rdb.rw/investors/verified-companies/'
}

const socialMedias: ISocialMedia[] = [
    {
        icon: <FaTwitter size={24} />,
        lnk: socialMediaLinks.twitter
    },
    {
        icon: <FaFacebook size={24} />,
        lnk: socialMediaLinks.facebook
    },
    {
        icon: <FaInstagram size={24} />,
        lnk: socialMediaLinks.instagram
    },
    {
        icon: <BsPatchCheckFill size={24} className="text-blue-400" />, // official verified badge look
        lnk: socialMediaLinks.verified
    },
]

const SocialMedia = ({className}: {className?: string}) => {
  return (
    <div className={`gap-2 flex ${className}`}>
        {socialMedias.map(s => <Link key={s.lnk} to={s.lnk} className='hover:text-middleColor'>{s.icon}</Link>)}
    </div>
  )
}

export default SocialMedia
