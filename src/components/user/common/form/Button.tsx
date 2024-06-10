import { Link } from "react-router-dom";

const Button = ({btnText, btnLnk}: IButton) => {
  return (
    <Link to={btnLnk} className="uppercase bg-textColor px-6 py-4 text-bgColor text-xs rounded-md hover:bg-shineColor my-2">{btnText}</Link>
  )
}

export interface IButton{
    btnLnk: string;
    btnText: string;
}

export default Button