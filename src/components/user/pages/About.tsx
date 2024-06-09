import { about_bg } from "../assets"
import PageHeader from "../common/shared/PageHeader"


const About = () => {
  return (
    <div className="">
      <PageHeader
        title="ABOUT US"
        backgroundImage={about_bg}
        description="Learn more about our collaborative workspace, our services and brand philosophy."
      />
    </div>
  )
}

export default About