import { FaSpinner } from "react-icons/fa";

const SubmitButton = ({title, loadingTitle, isLoading}: IButton) => {
  return (
    <button
        type="submit"
        className="my-1 mx-auto px-10 py-2 bg-shineColor rounded-lg text-bgUserColor text-xl hover:opacity-80 flex justify-center items-center gap-2"
        disabled={isLoading}
    >
        {isLoading && <FaSpinner className="animate-spin text-2xl" />}
        {isLoading ? loadingTitle : title}
    </button>
  )
}

export interface IButton{
    title: string;
    loadingTitle?: string;
    isLoading?: boolean;
}

export default SubmitButton