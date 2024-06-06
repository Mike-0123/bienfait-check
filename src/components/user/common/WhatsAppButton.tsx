import { FaWhatsapp } from 'react-icons/fa'
import constants from '../../../constants'

const WhatsAppButton = () => {
    return (
        <a target="_blank" className="bg-green-500 rounded-full h-14 w-14 flex justify-center items-center fixed right-5 bottom-5 z-10" href={`https://wa.me/250${constants.webInfo.phone}?text=${encodeURIComponent(constants.webInfo.whatsappText)}`}>
            <FaWhatsapp className="text-white" size={38} />
        </a>
    )
}

export default WhatsAppButton;