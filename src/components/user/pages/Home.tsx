import constants from "../../../constants";
import { card2, card3, card4, card5, card6, collab, logo, person1} from "../assets";
import Card from "../common/cards/Card";
import { card1 } from "../assets";
import { subTitleStyles, titleStyles } from "../../styles";
import ProjectCard from "../common/cards/ProjectCard";
import { Link } from "react-router-dom";
import TestimonyCard from "../common/cards/TestimonyCard ";
import JoinCard from "../common/cards/JoinCard";
import AnimatedDiv from "../common/shared/AnimatedDiv";
import HeroSection from "../common/home/HeroSection";
import ContentsDiv from "../common/shared/ContentsDiv";
import { useGetProjects } from "../../../DashBoard/Api/adminAPI";
import ErrorView from "../common/shared/ErrorView";

const Home = () => {
    const {isLoading, data, error} = useGetProjects()

    if (error) return <ErrorView error={error} />;

    return (
        <div>
            <HeroSection />

            <ContentsDiv>

                <AnimatedDiv className="text-textUserColor py-10" >
                    <h1 className={subTitleStyles}>Welcome to {constants.webInfo.name}</h1>
                    <h1 className={titleStyles}>{constants.webInfo.slogan}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 py-4">
                        <Card title='Pre-Design Planning' description="Consultation, master planning and research." number={1} img={card1} />
                        <Card title='Architectural Design' description="Design, technical drawings and 3D visualisation" number={2} img={card2} />
                        <Card title='Project Consulting and construction' description="Contract negotiations and project administration" number={3} img={card3} />
                        <Card title='Land Survery' description="Contract negotiations and project administration" number={4} img={card4} />
                        <Card title='Interior Design' description="Contract negotiations and project administration" number={5} img={card5} />
                        <Card title='Real Estate' description="Contract negotiations and project administration" number={6} img={card6} />
                    </div>
                </AnimatedDiv>

                <AnimatedDiv className="p-10 bg-white h-[80vh] flex justify-center items-center flex-col gap-8 text-center">
                    <img src={logo} className="w-48" />
                    <p className="text-middleColor text-lg">A network of visionary architects with a passion for <br /> innovative, beautiful and sustainable buildings</p>
                    <Link to='/about' className="uppercase bg-textUserColor px-5 py-3 text-bgUserColor text-xs rounded-md hover:bg-shineColor">ABOUT {constants.webInfo.name}</Link>
                </AnimatedDiv>

                <AnimatedDiv className="p-8 lg:px-24">
                    <div className="mb-5">
                        <h1 className={subTitleStyles}>We are Passionate Architects</h1>
                        <h1 className={titleStyles}>FEATURED WORK</h1>
                    </div>
                    <div className="flex flex-col gap-20">
                        {data && data.length > 0 && data.map((p, index) => <AnimatedDiv><ProjectCard key={p.id} name={p.title} index={index + 1} img={p.images} location={p.location} status={p.status} description={p.description} /></AnimatedDiv>)}
                    </div>
                    {isLoading && <p>Loading data.</p>}
                </AnimatedDiv>

                <AnimatedDiv className="text-textUserColor px-10 mt-3" >
                    <h1 className={subTitleStyles}>What our clients says</h1>
                    <h1 className={titleStyles}>TESTIMONIALS</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-1 mt-10">
                        <TestimonyCard name="Kevin T." title='CEO of Buildex Ltd' testimony="Best Architecture company I've ever seen." img={person1} />
                        <TestimonyCard name="Fabrice" title='Eng. in RW-Design' testimony="At first I hestated but you confirmed me." img={person1} />
                        <TestimonyCard name="KARANGWA Ivan" title='CEO of ArchRW' testimony="Awesome company" img={person1} />
                    </div>
                </AnimatedDiv>

                <AnimatedDiv className=" text-textUserColor px-10 mt-20">
                    <h1 className={subTitleStyles}>Our Unique  Approach</h1>
                    <h1 className={titleStyles}>COLLABORATIVE MODEL</h1>
                    <div className="mt-12">
                        <JoinCard
                            title='An Ever-Growing Community of Talented Professionals'
                            description="We have adopted a unique collaborative business model at Blackbox that allows us to offer a collective multi-expert service to our clients. We achieve this by associating ourselves with other like-minded architects and associates, both locally and remotely, and combine the skills, visions, and aesthetic styles of different experts to deliver visionary architectural solutions."
                            img={collab} />
                    </div>
                </AnimatedDiv>


            </ContentsDiv>

        </div>
    )
}

export default Home;
