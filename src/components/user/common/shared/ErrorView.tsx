import React from 'react';
import { FaSyncAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

type Props = {
  error: Error;
};

const ErrorView: React.FC<Props> = ({ error }) => {
  // Toast the error
  toast.error(error.message);

  return (
    <div className="p-4w-full h-40 gap-2 flex flex-col my-10 justify-center items-center bg-gray-600 bg-opacity-50 z-50 rounded-lg">
      <h1 className='text-3xl text-center font-bold'>ERROR</h1>
      <div className="text-center text-red-600">{error.message}</div>
      <button className='py-2 px-5 bg-gray-800 rounded-lg hover:bg-shineColor text-white flex gap-2 items-center justify-center' onClick={()=>window.location.reload()}><FaSyncAlt/>Reload</button>
    </div>
  );
};

export default ErrorView;