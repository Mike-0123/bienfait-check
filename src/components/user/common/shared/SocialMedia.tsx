import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { ISocialMedia } from '../../../types'

export const socialMediaLinks = {
    twitter: 'https://x.com/SpartialEnginer',
    facebook: 'https://www.facebook.com/profile.php?id=100077757162113',
    instagram: 'https://www.instagram.com/spartial_engineering_group'
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
]


const SocialMedia = ({className}: {className?: string}) => {
  return (
    <div className={`gap-2 flex ${className}`}>
        {socialMedias.map(s => <Link key={s.lnk} to={s.lnk} className='hover:text-middleColor'>{s.icon}</Link>)}
    </div>
  )
}

export default SocialMedia