import constants from "../../../constants";
import { portfolio_bg } from "../assets";
import PageHeader from "../common/shared/PageHeader";

const Portfolio = () => {
  return (
    <div className="">
      <PageHeader
        title="PORTFOLIO"
        backgroundImage={portfolio_bg}
        description={`A selection of our favourite designs created with love and passion by ${constants.webInfo.name}.`}
      />
    </div>
  )
}

export default Portfolio;
