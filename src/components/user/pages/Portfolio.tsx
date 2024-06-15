import constants from "../../../constants";
import { useGetProjects } from "../../../DashBoard/Api/adminAPI";
import { subTitleStyles, titleStyles } from "../../styles";
import { portfolio_bg} from "../assets";
import AnimatedDiv from "../common/shared/AnimatedDiv";
import ContentsDiv from "../common/shared/ContentsDiv";
import ErrorView from "../common/shared/ErrorView";
import ImgCarousel from "../common/shared/ImgCarousel";
import Loading from "../common/shared/Loading";
import PageHeader from "../common/shared/PageHeader";

const Portfolio = () => {

  const {isLoading, data, error} = useGetProjects();

  if (isLoading) return < Loading/>;
  if (error) return <ErrorView error={error} />;

  return (
    <div className="mb-6">
      <PageHeader
        title="PORTFOLIO"
        backgroundImage={portfolio_bg}
        description={`A selection of our favourite designs created with love and passion by ${constants.webInfo.name}.`}
      />
      <ContentsDiv>
        <AnimatedDiv className="my-5">
          <h1 className={subTitleStyles}>Featured Work</h1>
          <h1 className={titleStyles}>PROJECT GALLERY</h1>
        </AnimatedDiv>
        <AnimatedDiv className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data && data.length > 0 && data.map(d => d.images).map((portfolio, index) => (
             <div className="w-full bg-cover bg-center rounded-lg max-h-96 overflow-hidden shadow-md shadow-shineColor " style={{ backgroundImage: `url(${portfolio[0]})` }}>
              < ImgCarousel key={index} images={portfolio} />
            </div>))}
        </AnimatedDiv>
        {isLoading && <p>Loading data.</p>}
      </ContentsDiv>
    </div>
  )
}

export default Portfolio;
