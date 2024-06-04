const webInfo = {
    name: "Spartial Engineering Group",
    phone: "0735177666",
    whatsappText: "Hello xxx I am from your website Spartial Engineering, can we talk?",
    slogan: "We make your dreams come true"
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