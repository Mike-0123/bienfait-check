import { FaSpinner } from "react-icons/fa";
import { h1Styles } from "../../../styles";

const LoadingData = ({title}: {title: string}) => {
    return (
        <div className="w-full h-32 gap-2 flex flex-col my-10 justify-center items-center bg-gray-600 bg-opacity-50 z-50 animate-pulse rounded-lg">
            <FaSpinner className="animate-spin text-4xl text-gray-900" />
            <h2 className={`${h1Styles} text-3xl text-gray-800`}>Loading {title}</h2>
        </div>
    );
};

export default LoadingData;
