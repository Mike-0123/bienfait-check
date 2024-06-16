import { FaTimes } from 'react-icons/fa';

export const Popup = ({ setShowPopup, children, className, hideCloseBtn = false }) => {
    const handleClick = (event) => {
        if (event.target === event.currentTarget) {
            setShowPopup(false);
        }
    };
    return (
        <div onClick={handleClick} className={`min-h-screen h-full absolute top-0 left-0 right-0 bg-black bg-opacity-90 flex justify-center items-center p-5`}>
            <div className={`w-2/3 bg-bgColor2 p-4 rounded-lg shadow-lg shadow-black flex flex-col items-center animate__animated animate__zoomInUp animate__faster ${className}`}>
                {!hideCloseBtn && <div className="text-bgMiddleColorLight absolute right-22 md:right-45 lg:right-50 rounded-lg bg-black p-2 cursor-pointer" onClick={() => setShowPopup(false)} ><FaTimes /></div>}
                <div className='flex flex-col gap-3'>{children}</div>
            </div>
        </div>
    )
}
