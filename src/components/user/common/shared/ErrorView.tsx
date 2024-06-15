import React from 'react';
import { toast } from 'react-toastify';

type Props = {
  error: Error;
};

const ErrorView: React.FC<Props> = ({ error }) => {
  // Toast the error
  toast.error(error.message);

  return (
    <div className="p-4">
      <h1 className='text-4xl mb-10 text-center'>Error</h1>
      <div className="text-center text-red-600">{error.message}</div>
    </div>
  );
};

export default ErrorView;