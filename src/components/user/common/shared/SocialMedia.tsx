import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { ISocialMedia } from '../../../types'

export const socialMediaLinks = {
    linkedIn: 'https://linkedin.com/username',
    facebook: 'https://facebook.com/username',
    instagram: 'https://instagram.com/username'
}

const socialMedias: ISocialMedia[] = [
    {
        icon: <FaLinkedin size={24} />,
        lnk: socialMediaLinks.linkedIn
    },
    {
        icon: <FaFacebook size={24} />,
        lnk: socialMediaLinks.facebook
    },
    {
        icon: <FaInstagram size={24} />,
        lnk: socialMediaLinks.instagram
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