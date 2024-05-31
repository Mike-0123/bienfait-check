import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin } from "react-icons/fa"
import { ISocialMedia } from '../../types'

const socialMedias: ISocialMedia[] = [
    {
        icon: <FaLinkedin size={24} />,
        lnk: 'https://linkedin.com/username'
    },
    {
        icon: <FaFacebook size={24} />,
        lnk: 'https://facebook.com/username'
    },
]


const SocialMedia = ({className}: {className?: string}) => {
  return (
    <div className={`gap-2 flex ${className}`}>
        {socialMedias.map(s => <Link to={s.lnk} className='hover:text-middleColor'>{s.icon}</Link>)}
    </div>
  )
}

export default SocialMedia