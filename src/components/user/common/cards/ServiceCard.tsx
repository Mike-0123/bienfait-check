import { h1Styles, pSmallStyles } from '../../../styles'
import { IServceCard } from '../../../types'

const ServiceCard = ({ title, description, icon }: IServceCard) => {
    return (
        <div className="relative w-80 lg:w-[90%] h-90 bg-white mx-auto my-4 flex flex-col gap-5 rounded-md shadow-2xl shadow-middleColor px-3 py-1">
            <div className="absolute top-0 left-0 w-full h-2 bg-gray-800 rounded-t-md"></div>
            <div className="flex justify-center items-center pt-10">
                <div className="bg-gray-200 rounded-full p-3">
                    {icon}
                </div>
            </div>
            <div className="px-2 flex flex-col justify-center items-center mb-8">
                <h1 className={h1Styles}>{title}</h1>
                <p className={`${pSmallStyles} text-center my-2`}>{description}</p>
            </div>
        </div>
    )
}

export default ServiceCard