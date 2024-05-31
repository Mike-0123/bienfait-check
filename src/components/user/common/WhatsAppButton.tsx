import { FaWhatsapp } from 'react-icons/fa'
import constants from '../../../constants'

const WhatsAppButton = () => {
    return (
        <a target="_blank" className="bg-green-500 rounded-md h-10 w-12 flex justify-center items-center fixed right-5 bottom-5 z-10" href={`https://wa.me/25${constants.webInfo.phone}?text=${encodeURIComponent(constants.webInfo.whatsappText)}`}>
            <FaWhatsapp className="text-white" size={32} />
        </a>
    )
}

export default WhatsAppButton;