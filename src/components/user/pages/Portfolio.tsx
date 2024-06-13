import constants from "../../../constants";
import { subTitleStyles, titleStyles } from "../../styles";
import { portfolio_bg, project1, project2, project3, project4, project5 } from "../assets";
import AnimatedDiv from "../common/shared/AnimatedDiv";
import ContentsDiv from "../common/shared/ContentsDiv";
import ImgCarousel from "../common/shared/ImgCarousel";
import PageHeader from "../common/shared/PageHeader";

const Portfolio = () => {

  const portfolios = [
    [project1, project2, project3, project4],
    [project2, project5, project1, project4],
    [project3, project2, project3, project4],
    [project4, project1, project3, project5]
  ];

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
          {portfolios.map((portfolio, index) => (
            <div>
              < ImgCarousel key={index} images={portfolio} />
            </div>))}
        </AnimatedDiv>
      </ContentsDiv>
    </div>
  )
}

export default Portfolio;
