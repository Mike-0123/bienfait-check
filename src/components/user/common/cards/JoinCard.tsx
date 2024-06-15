import { Link } from "react-router-dom"
import { h1Styles, pSmallStyles } from "../../../styles"

const JoinCard = ({ title, description, img }: { img: string, description: string, title: string }) => {
    return (
        <div className={'bg-bgUserColor text-textUserColor mx-auto w-full flex flex-col justify-between shadow-2xl shadow-middleColor lg:flex-row rounded-lg'}>
            <div className="w-full h-64 bg-cover bg-center rounded-l-lg lg:w-1/2 lg:h-96" style={{ backgroundImage: `url(${img})` }}></div>
            <div className="bg-white p-5 lg:w-1/2 lg:pt-20 lg:px-10 rounded-lg flex flex-col gap-5 items-center justify-start">
                <h1 className={h1Styles}>{title}</h1>
                <p className={pSmallStyles}>{description}</p>
                <Link to='/about' className="uppercase bg-textUserColor px-5 py-3 text-bgUserColor text-xs rounded-md hover:bg-shineColor">BECOME ASSOCIATE</Link>
            </div>
        </div>
    )
}

export default JoinCard