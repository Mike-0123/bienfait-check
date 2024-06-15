import { localApiData } from "../data";
export const localCallAPI = (endpoint, method, data = null) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (endpoint === '/admin/login') {
          const { email, password } = data;
          const user = localApiData.admins.find(u => u.email === email && u.password === password);
          if (user) {
            resolve({ status: 200, resStatus: true, resMsg: {adminToken: "thisIsLocalToken", admin: user} });
          } else {
            resolve({ status: 401, resStatus: false, resMsg: 'Invalid credentials' });
          }
        }
        else if(endpoint === '/admin/current'){
            resolve({ status: 200, resStatus: true, resMsg: localApiData.admins[0] });
        } 
        else if(endpoint === '/admin/dashboard'){
          const dashboardData = {
            totalUsers: 2,
            totalSub: 6,
            totalAmategeko: 7,
            totalIbyapa: 7,
            totalQuiz: 8,
            totalAdmins: 3
          }
            resolve({ status: 200, resStatus: true, resMsg: dashboardData });
        } 
        else {
            resolve({ status: 401, resStatus: false, resMsg: 'API not found' });
        }
      }, 2000);
    });
  };