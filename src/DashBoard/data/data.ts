import { logo } from '../components/assets'

const dashboardInfo = {
    userTitle: 'Admin',
    name: 'Admin Dashboard',
    serverLink: "http://localhost:9090/",
    tokenName: "adminToken",
    webStatus: "production",
    localStoragePrefix: "Admin",
    startRouteLink: "/admin",
    logoImg: logo,
}

const apiFunctions = [
    { name: 'adminLoginAPI', endpoint: '/admin/login', method: 'post', args: ['email', 'password'] },
    { name: 'adminCurrentUserAPI', endpoint: '/admin/check', method: 'get', args: [] },
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