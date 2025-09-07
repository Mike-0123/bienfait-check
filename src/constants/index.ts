const webInfo = {
    name: "Spartial Engineering Group",
    phone: "788208488",
    whatsappText: "Hello Spartial Engineering Group, I am from your website, can we talk?",
    slogan: "We bring your vision to life, Good design last forever",
    location: "KG 14 Ave, Kigali-Gisozi-Rwanda",
    email: "spartialengineeringltd@gmail.com",
    ownerNames: "S. Bienfait",
}

const applyRequirements = {
  experience_2: '2 Years',
  experience: '3 Years',
  softwares: 'AutoCad, Archicad and Lumion',
  softwares_2: 'AutoCad and Prota',
  softwares_3: 'Archicad and AutoCad',
}

const navLinks = [
    {
        name: "Home",
        lnk: "/"
    },
    {
        name: "About",
        lnk: "/about"
    },
    {
        name: "Portfolio",
        lnk: "/portfolio"
    },
    {
        name: "Contact",
        lnk: "/contact"
    },
    {
        name: "Join Us",
        lnk: "/join"
    }
]

const countries = ['RW', 'US'];

export const staggerContainer = (staggerChildren?: any, delayChildren?: any) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };

export default { 
    webInfo,
    navLinks,
    countries,
    applyRequirements
 };