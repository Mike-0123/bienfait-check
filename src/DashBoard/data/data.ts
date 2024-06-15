import { logo } from '../components/assets'

const dashboardInfo = {
    userTitle: 'Admin',
    name: 'Admin Dashboard',
    serverLink: "http://localhost:9090/",
    tokenName: "adminToken",
    webStatus: "Development",
    localStoragePrefix: "Admin",
    startRouteLink: "/admin",
    logoImg: logo,
}

const apiFunctions = [
    { name: 'adminLoginAPI', endpoint: '/admin/login', method: 'post', args: ['email', 'password'] },
    { name: 'adminRegisterAPI', endpoint: '/admin/register', method: 'post', args: ['names', 'email', 'phone', 'password'] },
    { name: 'adminCurrentUserAPI', endpoint: '/admin/current', method: 'get', args: [] },
    { name: 'getAllUsersApi', endpoint: '/admin/users', method: 'get', args: [] },
    { name: 'getDashboardData', endpoint: '/admin/dashboard', method: 'get', args: [] },
    { name: 'getAdmins', endpoint: '/admin/admins', method: 'get', args: [] },
];

const localApiData = {
    users: [
        {
            id: 1,
            names: "Olivier",
            email: "olivier@gmail.com",
            password: "Olivier@12",
        },
        {
            id: 2,
            names: "Dev User",
            email: "dev@gmail.com",
            password: "dev",
        }
    ],
    admins: [
        {
            id: 1,
            names: "OlivierAdmin",
            email: "admin@gmail.com",
            password: "Admin@12",
        },
        {
            id: 2,
            names: "Dev Admin",
            email: "dev@gmail.com",
            password: "password",
        }
    ]
}


export {
    dashboardInfo,
    apiFunctions,
    localApiData,
}




/*
  Dependencies
  ============

  Tailwind:
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

        config: (copy Tailwind.config.js)
            
        index.css:
            @tailwind base;
            @tailwind components;
            @tailwind utilities;

    npm i react-router-dom react-icons apexcharts react-apexcharts @headlessui/react @heroicons/react animate.css axios react-toastify

    App.jsx:
            import { ToastContainer } from 'react-toastify';
            import 'react-toastify/dist/ReactToastify.css';
            <ToastContainer position="bottom-right" limit={3}/>
*/