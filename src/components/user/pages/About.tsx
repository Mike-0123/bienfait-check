import { FaBuilding, FaLightbulb, FaPencilAlt, FaToolbox } from "react-icons/fa";
import constants from "../../../constants";
import { subTitleStyles, titleStyles } from "../../styles";
import { IAboutCard, IServceCard } from "../../types";
import { about1, about3, about4, about_bg, logo } from "../assets";
import AboutCard from "../common/cards/AboutCard";
import AnimatedDiv from "../common/shared/AnimatedDiv";
import PageHeader from "../common/shared/PageHeader";
import { socialMediaLinks } from "../common/shared/SocialMedia";
import ServiceCard from "../common/cards/ServiceCard";
import { FaBookBookmark, FaNoteSticky } from "react-icons/fa6";
import ContentsDiv from "../common/shared/ContentsDiv";
import TeamSection from "../common/cards/TeamSection"; // <-- import TeamSection here

const abouts: IAboutCard[] = [
  {
    index: 1,
    title: constants.webInfo.ownerNames,
    subTitle: 'Founder & Managing Director',
    img: about1,
    btnText: `CONNECT WITH ${constants.webInfo.ownerNames.toUpperCase()}`,
    btnLnk:'https://www.instagram.com/bienfaitdesign/' ,
    description:'With 15 years of experience in engineering, S. Bienfait provides strategic direction to SPARTIAL ENGINEERING GROUP LTD, driving innovation, efficiency, and excellence. His expertise ensures high-quality solutions, sustainable growth, and industry-leading standards in every project.'
  },
  {
    index: 2,
    title: constants.webInfo.name,
    subTitle: 'The Philosophy',
    img: logo,
    btnText: `OUR PORTFOLIO`,
    btnLnk: '/portfolio',
    description: `Architectural design and on-site engineering must work in harmony to create environments that are not only functional and aesthetically refined but also sustainable and structurally sound. At SPARTIAL ENGINEERING GROUP LTD, we believe in a design approach driven by purpose, context, and innovation, while our engineering expertise ensures precise execution, material efficiency, and adaptive problem-solving. This synergy allows us to deliver spaces that are safe, efficient, and inspiring—built to enhance both human experience and the environment.`
  },
  {
    index: 3,
    title: 'COLLABORATION',
    subTitle: 'An Ever-Growing Community',
    img: about3,
    btnText: `JOIN US NOW`,
    btnLnk: '/join',
    description: `At SPARTIAL ENGINEERING GROUP LTD, collaboration is the foundation of innovation and excellence. We engage seamlessly with architects, engineers, developers, and clients, ensuring a multidisciplinary approach that integrates design vision, technical precision, and sustainable solutions. Through strategic partnerships and open communication, we tackle complex challenges efficiently, delivering high-performance, functional, and inspiring built environments that stand the test of time.`
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
];

const services: IServceCard[] = [
  {
    title: 'Pre-Design Consultation',
    description: 'Our pre-design consultation ensures clear vision and strategic planning. We assess client needs, site conditions, budget, and sustainability goals, offering expert guidance on feasibility, design concepts, engineering solutions, and land subdivision to create efficient and high-quality developments.',
    icon: <FaLightbulb size={64} />
  },
  {
    title: 'Design Development',
    description: 'Evolving the client brief from rough sketches to a full set of plans and elevations demonstrating the final form of the building along with the indicative costs of construction.',
    icon: <FaPencilAlt size={64} />
  },
  {
    title: '3D Visualisation',
    description: 'Converting plans and elevations into 3-dimensional renders of the building façade and surrounding environment as a clear visualisation of the final aesthetic, form and materials.',
    icon: <FaBuilding size={64} />
  },
  {
    title: 'Contruction Documents',
    description: 'Development of plans, elevations and other drawings into a working set of construction drawings and technical specifications for the contractor and other design consultants.',
    icon: <FaBookBookmark size={64} />
  },
  {
    title: 'Contract Negotiations',
    description: 'Acting as an agent and advisor to the client in soliciting the bidding process and contract negotiations in order to validate bids and pursue maximum value for the money.',
    icon: <FaNoteSticky size={64} />
  },
  {
    title: 'Contract Administration',
    description: 'Acting as an agent and advisor to the client during construction in order to ensure that the project is built in accordance with the construction drawings and specifications.',
    icon: <FaToolbox size={64} />
  }
];

const About = () => {
  return (
    <div className="">
      <PageHeader
        title="ABOUT US"
        backgroundImage={about_bg}
        description="Learn more about our collaborative workspace, our services and brand philosophy."
      />

      <ContentsDiv>

        <AnimatedDiv className="p-10">
          <div className="mb-5">
            <h1 className={subTitleStyles}>The {constants.webInfo.name} Brand</h1>
            <h1 className={titleStyles}>ABOUT US</h1>
          </div>
          <div className="flex flex-col gap-20">
            {abouts.map((a, i) => (
              <AnimatedDiv key={i}>
                <AboutCard
                  title={a.title}
                  subTitle={a.subTitle}
                  index={a.index}
                  btnText={a.btnText}
                  btnLnk={a.btnLnk}
                  description={a.description}
                  img={a.img}
                />
                {/* Render TeamSection under Founder card */}
                {i === 0 && <TeamSection />}
              </AnimatedDiv>
            ))}
          </div>
        </AnimatedDiv>

        <AnimatedDiv className="p-10">
          <div className="mb-5">
            <h1 className={subTitleStyles}>What we offer</h1>
            <h1 className={titleStyles}>OUR SERVICES</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {services.map((s, index) => (
              <AnimatedDiv key={index}>
                <ServiceCard
                  title={s.title}
                  description={s.description}
                  icon={s.icon}
                />
              </AnimatedDiv>
            ))}
          </div>
        </AnimatedDiv>

      </ContentsDiv>
    </div>
  );
};

export default About;
