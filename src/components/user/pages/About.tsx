import { FaBuilding, FaLightbulb, FaPencilAlt, FaToolbox } from "react-icons/fa"
import constants from "../../../constants"
import { subTitleStyles, titleStyles } from "../../styles"
import { IAboutCard, IServceCard } from "../../types"
import { about1, about3, about4, about_bg, bg, logo } from "../assets"
import AboutCard from "../common/cards/AboutCard"
import AnimatedDiv from "../common/shared/AnimatedDiv"
import PageHeader from "../common/shared/PageHeader"
import { socialMediaLinks } from "../common/shared/SocialMedia"
import ServiceCard from "../common/cards/ServiceCard"
import { FaBookBookmark, FaNoteSticky } from "react-icons/fa6"

const abouts: IAboutCard[] = [
  {
    index: 1,
    title: constants.webInfo.ownerNames,
    subTitle: 'Managing Architect',
    img: about1,
    btnText: `CONNECT WITH ${constants.webInfo.ownerNames.toUpperCase()}`,
    btnLnk: socialMediaLinks.linkedIn,
    description: 'This residential project is for an urban double family house located in the city of Chalkida. The main idea is to unite the two residences into one discriminated whole so that they are both parts of one concrete volume. Selected parts of the volume are partitioned to establish an indoor-outdoor connection. The different parts of the synthesis are cladded with different materials.'
  },
  {
    index: 2,
    title: constants.webInfo.name,
    subTitle: 'The Philosophy',
    img: logo,
    btnText: `OUR PORTFOLIO`,
    btnLnk: '/portfolio',
    description: `Architectural design requires an intricate synthesis of the key parameters of architectonics - functional, aesthetic, psychosocial and techno-economic. An innovative architect handles such design problems in the “${constants.webInfo.name}” of their mind to bring a creative explosion where unique architectural solutions emerge. At ${constants.webInfo.name}, we live by the principles of innovation and creative thinking and aim to develop unique designs that are not only beautiful but also inventive.`
  },
  {
    index: 3,
    title: 'COLLABORATION',
    subTitle: 'An Ever-Growing Community',
    img: about3,
    btnText: `JOIN US NOW`,
    btnLnk: '/join',
    description: `Having understood the complexity of client requirements and diversity of design solutions, Evita developed the ${constants.webInfo.name} collaboration system which brings multiple like-minded architects and associates together to provide a hollistic service to clients. This innovative business structure provides clients with the unique benefit of a collaborative solution that unifies the strengths, know-how and creativity of multiple industry professionals within a single service.`
  },
  {
    index: 4,
    title: 'THE STUDIO',
    subTitle: 'A Collaborative workplace',
    img: about4,
    btnText: `GET IN TOUCH`,
    btnLnk: '/contact',
    description: `The ${constants.webInfo.name} studio is located in ${constants.webInfo.location} and prides itself as a modern and creative environment for creative thinking and unique design solutions. The office houses a number of local employees and is reinforced further by the company's unique collaboration system that comprises a wide network of remote architects and other associates that fully extend the capabilities of the company into the full ${constants.webInfo.name} service.`
  }
]

const services: IServceCard[] = [
  {
    title: 'Pre-Design Consultation',
    description: 'Detailed consultation to help define the purpose and basic requirements of the project followed by pre-design services such master planning and research of the site and building.',
    icon: <FaLightbulb size={64}/>
  },
  {
    title: 'Design Development',
    description: 'Evolving the client brief from rough sketches to a full set of plans and elevations demonstrating the final form of the building along with the indicative costs of construction.',
    icon: <FaPencilAlt size={64}/>
  },
  {
    title: '3D Visualisation',
    description: 'Converting plans and elevations into 3-dimensional renders of the building façade and surrounding environment as a clear visualisation of the final aesthetic, form and materials.',
    icon: <FaBuilding size={64}/>
  },
  {
    title: 'Contruction Documents',
    description: 'Development of plans, elevations and other drawings into a working set of construction drawings and technical specifications for the contractor and other design consultants.',
    icon: <FaBookBookmark size={64}/>
  },
  {
    title: 'Contract Negotiations',
    description: 'Acting as an agent and advisor to the client in soliciting the bidding process and contract negotiations in order to validate bids and pursue maximum value for the money.',
    icon: <FaNoteSticky size={64}/>
  },
  {
    title: 'Contract Administration',
    description: 'Acting as an agent and advisor to the client during construction in order to ensure that the project is built in accordance with the construction drawings and specifications.',
    icon: <FaToolbox size={64}/>
  },
]

const About = () => {
  return (
    <div className="">
      <PageHeader
        title="ABOUT US"
        backgroundImage={about_bg}
        description="Learn more about our collaborative workspace, our services and brand philosophy."
      />

      <div className="bg-auto bg-center" style={{ backgroundImage: `url(${bg})` }}>

        <AnimatedDiv className="p-10">
          <div className="mb-5">
            <h1 className={subTitleStyles}>The {constants.webInfo.name} Brand</h1>
            <h1 className={titleStyles}>ABOUT US</h1>
          </div>
          <div className="flex flex-col gap-20">
            {abouts.map((a) => <AnimatedDiv><AboutCard title={a.title} subTitle={a.subTitle} index={a.index} btnText={a.btnText} btnLnk={a.btnLnk} description={a.description} img={a.img} /></AnimatedDiv>)}
          </div>
        </AnimatedDiv>

        <AnimatedDiv className="p-10">
          <div className="mb-5">
            <h1 className={subTitleStyles}>What we offer</h1>
            <h1 className={titleStyles}>OUR SERVICES</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {services.map((s, index) => <AnimatedDiv><ServiceCard title={s.title} key={index} description={s.description} icon={s.icon} /></AnimatedDiv>)}
          </div>
        </AnimatedDiv>

      </div>
    </div>
  )
}

export default About