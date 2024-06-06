const webInfo = {
    name: "Spartial Engineering Group",
    phone: "735177666",
    whatsappText: "Hello xxx I am from your website Spartial Engineering, can we talk?",
    slogan: "We make your dreams come true",
    location: "KG 774 St, Kigali-Rwanda",
    email: "email@gmail.com"
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
    countries
 };