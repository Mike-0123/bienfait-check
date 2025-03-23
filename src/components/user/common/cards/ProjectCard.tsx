import { h1Styles, pSmallStyles } from "../../../styles"
import ImgCarousel from "../shared/ImgCarousel"

const ProjectCard = ({index, img, location, status, description, name} : {index: number, img: string[], location: string, status: string, description: string, name: string}) => {
    
    const handleLocationClick = () => {
        // Check if location is a valid URL
        const isUrl = (str: string) => {
            try {
                new URL(str);
                return true;
            } catch {
                return false;
            }
        };
        
        // If it's a URL, open it directly
        if (isUrl(location)) {
            window.open(location, '_blank');
        } 
        // Otherwise search on Google Maps
        else {
            const googleMapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(location)}`;
            window.open(googleMapsUrl, '_blank');
        }
    };
    
    return (
        <div className={`bg-bgUserColor text-textUserColor mx-auto w-full my-4 flex flex-col justify-between rounded-md shadow-2xl shadow-middleColor  ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            <div className="w-full h-64 bg-cover bg-center rounded-sm lg:w-1/2 lg:h-96 overflow-hidden" style={{ backgroundImage: `url(${img[0]})` }}>
                <ImgCarousel images={img} />
            </div>
            <div className="bg-white p-5 lg:w-1/2 relative lg:pt-20 lg:px-10 rounded-lg">
            <div className={`bg-textUserColor text-bgUserColor px-5 py-2 text-lg lg:absolute top-5 lg:text-2xl lg:rounded-md lg:px-10 lg:w-full lg:flex lg:justify-center ${index % 2 === 0 ? 'left-20' : '-left-20'}`}>{name}</div>
                <div className="my-4">
                    <h1 className={h1Styles}>LOCATION</h1>
                    <p 
                        className={`${pSmallStyles} cursor-pointer hover:text-blue-600 hover:underline flex items-center`}
                        onClick={handleLocationClick}
                    >
                        {location}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </p>
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