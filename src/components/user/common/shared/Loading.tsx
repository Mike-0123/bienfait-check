import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "visible";
        };
    }, []);
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
            <FaSpinner className="animate-spin text-5xl text-white" />
        </div>
    );
};

export default Loading;
