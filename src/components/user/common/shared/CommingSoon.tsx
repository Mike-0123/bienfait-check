import { FaSpinner } from "react-icons/fa"

const CommingSoon = ({pageName}: {pageName?: string}) => {
    return (
        <div className="w-full h-[70vh] flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-5 animate-pulse">
                <FaSpinner className="animate-spin text-4xl text-shineColor" />
                <h1 className="text-lg">{pageName && pageName}</h1>
                <p className="text-2xl uppercase text-shineColor">Under Development</p>
            </div>
        </div>
    )
}

export default CommingSoon