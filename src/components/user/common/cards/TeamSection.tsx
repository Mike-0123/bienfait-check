import { FC } from "react";
import { FaLinkedin } from "react-icons/fa";
import { armd, isimbi} from "../../assets";

interface ITeamMember {
  name: string;
  role: string;
  img: string;
  linkedin: string;
}

const teamMembers: ITeamMember[] = [
  {
    name: "SHEMA Chriss Armand",
    role: "Interior Designer",
    img:armd, // AI-themed
    linkedin: "https://www.linkedin.com/in/shemachrisarmand/",
  },
  {
    name: "UWERA SIMBI Aline",
    role: "Draft Women",
    img:isimbi , 
    linkedin: "https://www.linkedin.com/in/aline-uwera-simbi-022286301/",
  },
  {
    name: "KAZASOMAHO J.Claude",
    role: "Structual Engineer",
    img: "https://tse2.mm.bing.net/th/id/OIP.31F7heyNrbiTmHBz1Jc1LQHaH3?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3", // AI-themed
    linkedin: "https://www.linkedin.com/in/kazasomaho-jean-claude/",
  },
];

const TeamSection: FC = () => {
  return (
    <div className="bg-bgUserColor text-textUserColor py-24">
      <h2 className="text-3xl font-bold text-center mb-16 tracking-wide">
        Meet Our Agile Team
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-16">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative group flex flex-col items-center">
            {/* Bigger Circular Photo with overlay */}
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden relative shadow-2xl cursor-pointer">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center rounded-full">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-700 p-3 rounded-full"
                >
                  <FaLinkedin size={28} />
                </a>
              </div>
            </div>
            {/* Name and Role */}
            <p className="mt-6 font-bold text-2xl">{member.name}</p>
            <p className="text-lg text-middleColor">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
