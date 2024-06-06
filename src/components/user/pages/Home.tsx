import constants from "../../../constants";
import { bg, card2, card3, card4, card5, card6, collab, hero, logo, person1, project1, project2, project3, project4, project5 } from "../assets";
import Card from "../common/Card";
import { card1 } from "../assets";
import { subTitleStyles, titleStyles } from "../../styles";
import ProjectCard from "../common/ProjectCard";
import { Link } from "react-router-dom";
import TestimonyCard from "../common/TestimonyCard ";
import JoinCard from "../common/JoinCard";

const projects = [
    {
        id: 1,
        name: 'SEA-VIEW APARTMENTS',
        img: project1,
        location: 'Kigali, Rwanda',
        status: 'Completed in 2023',
        description: 'This residential project is for an urban double family house located in the city of Chalkida. The main idea is to unite the two residences into one discriminated whole so that they are both parts of one concrete volume. Selected parts of the volume are partitioned to establish an indoor-outdoor connection. The different parts of the synthesis are cladded with different materials.'
    },
    {
        id: 2,
        name: 'GORILLA APARTMENT',
        img: project2,
        location: 'Butare, Rwanda',
        status: 'Pending',
        description: 'This residential project is for an urban double family house located in the city of Chalkida. The main idea is to unite the two residences into one discriminated whole so that they are both parts of one concrete volume. Selected parts of the volume are partitioned to establish an indoor-outdoor connection. The different parts of the synthesis are cladded with different materials.'
    },
    {
        id: 3,
        name: 'GEL BATIMENT',
        img: project3,
        location: 'Butare, Rwanda',
        status: 'Pending',
        description: 'This residential project is for an urban double family house located in the city of Chalkida. The main idea is to unite the two residences into one discriminated whole so that they are both parts of one concrete volume. Selected parts of the volume are partitioned to establish an indoor-outdoor connection. The different parts of the synthesis are cladded with different materials.'
    },
    {
        id: 4,
        name: 'ROUNDED CORNER PLAZA',
        img: project4,
        location: 'Butare, Rwanda',
        status: 'Pending',
        description: 'This residential project is for an urban double family house located in the city of Chalkida. The main idea is to unite the two residences into one discriminated whole so that they are both parts of one concrete volume. Selected parts of the volume are partitioned to establish an indoor-outdoor connection. The different parts of the synthesis are cladded with different materials.'
    },
    {
        id: 5,
        name: 'VILLA APARTMENT',
        img: project5,
        location: 'Butare, Rwanda',
        status: 'Pending',
        description: 'This residential project is for an urban double family house located in the city of Chalkida. The main idea is to unite the two residences into one discriminated whole so that they are both parts of one concrete volume. Selected parts of the volume are partitioned to establish an indoor-outdoor connection. The different parts of the synthesis are cladded with different materials.'
    },
]

const Home = () => {
    return (
        <div>

            <div className="relative h-[88vh] bg-cover bg-center flex flex-col justify-center items-center text-bgColor select-none" style={{ backgroundImage: `url(${hero})` }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="z-10 flex flex-col items-center gap-4">
                    <h1 className="text-6xl lg:text-8xl uppercase font-bold text-white text-center leading-snug">{constants.webInfo.name}</h1>
                    <p className="text-lg text-white">{constants.webInfo.slogan}</p>
                    <div className="absolute bottom-8 flex items-center justify-center transform rotate-90">
                        <p className="text-lg text-white">More</p>
                        <div className="w-12 h-0.5 bg-white ml-2"></div>
                    </div>
                </div>
            </div>

            <div className="bg-auto bg-center" style={{ backgroundImage: `url(${bg})` }}>

                <div className="text-textColor select-none py-10" >
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
                </div>

                <div className="p-10 bg-white h-[80vh] flex justify-center items-center flex-col gap-8 text-center">
                    <img src={logo} className="w-48" />
                    <p className="font-thin text-2xl">A network of visionary architects with a passion for <br /> innovative, beautiful and sustainable buildings</p>
                    <Link to='/about' className="uppercase bg-textColor px-5 py-3 text-bgColor text-xs rounded-md hover:bg-shineColor">ABOUT {constants.webInfo.name}</Link>
                </div>

                <div className="p-10">
                    <div className="mb-5">
                        <h1 className={subTitleStyles}>We are Passionate Architects</h1>
                        <h1 className={titleStyles}>FEATURED WORK</h1>
                    </div>
                    <div className="flex flex-col gap-20">
                        {projects.map((p, index) => <ProjectCard key={p.id} name={p.name} index={index + 1} img={p.img} location={p.location} status={p.status} description={p.description} />)}
                    </div>
                </div>

                <div className="text-textColor select-none px-10 mt-3" >
                    <h1 className={subTitleStyles}>What our clients says</h1>
                    <h1 className={titleStyles}>TESTIMONIALS</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-1 mt-10">
                        <TestimonyCard name="Kevin T." title='CEO of Buildex Ltd' testimony="Best Architecture company I've ever seen." img={person1} />
                        <TestimonyCard name="Fabrice" title='Eng. in RW-Design' testimony="At first I hestated but you confirmed me." img={person1} />
                        <TestimonyCard name="KARANGWA Ivan" title='CEO of ArchRW' testimony="Awesome company" img={person1} />
                    </div>
                </div>

                <div className=" text-textColor select-none px-10 mt-20">
                    <h1 className={subTitleStyles}>Our Unique  Approach</h1>
                    <h1 className={titleStyles}>COLLABORATIVE MODEL</h1>
                    <div className="mt-12">
                        <JoinCard
                            title='An Ever-Growing Community of Talented Professionals'
                            description="We have adopted a unique collaborative business model at Blackbox that allows us to offer a collective multi-expert service to our clients. We achieve this by associating ourselves with other like-minded architects and associates, both locally and remotely, and combine the skills, visions, and aesthetic styles of different experts to deliver visionary architectural solutions."
                            img={collab} />
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Home;
