import { h1Styles, pSmallStyles } from "../../../styles"
import ImgCarousel from "../shared/ImgCarousel"

const ProjectCard = ({index, img, location, status, description, name} : {index: number, img: string[], location: string, status: string, description: string, name: string}) => {
    return (
        <div className={`bg-bgUserColor text-textUserColor mx-auto w-full my-4 flex flex-col justify-between rounded-md shadow-2xl shadow-middleColor ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            <div className="w-full h-64 bg-cover bg-center rounded-sm lg:w-1/2 lg:h-96 overflow-hidden" style={{ backgroundImage: `url(${img[0]})` }}>
                <ImgCarousel images={img} />
            </div>
            <div className="bg-white p-5 lg:w-1/2 relative lg:pt-20 lg:px-10 rounded-lg">
            <div className={`bg-textUserColor text-bgUserColor px-5 py-2 text-lg lg:absolute top-5 lg:text-2xl lg:rounded-md lg:px-10 lg:w-full lg:flex lg:justify-center ${index % 2 === 0 ? 'left-20' : '-left-20'}`}>{name}</div>
                <div className="my-4">
                    <h1 className={h1Styles}>LOCATION</h1>
                    <p className={pSmallStyles}>{location}</p>
                </div>
                <div className="my-4">
                    <h1 className={h1Styles}>STATUS</h1>
                    <p className={pSmallStyles}>{status}</p>
                </div>
                <div className="my-4">
                    <h1 className={h1Styles}>DESCRIPTION</h1>
                    <p className={pSmallStyles}> {description} </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard