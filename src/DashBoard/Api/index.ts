import axios from 'axios';
import { dashboardInfo, apiFunctions } from '../data/data';
import { localCallAPI } from './localApi';

const BASE_URL = `${dashboardInfo.serverLink}api`;

async function callAPI(endpoint, method, data = null) {
  try {
    let token = '';
    const cookies = document.cookie.split('; ');
    const tokenCookie = cookies.find(row => row.startsWith(`${dashboardInfo.tokenName}=`));
    if (tokenCookie) {
      token = tokenCookie.split('=')[1];
    }
    const response = await axios({
      method,
      url: `${BASE_URL}${endpoint}`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      timeout: 30000,
    });
    const { status, resStatus, resMsg } = response.data;
    if (status === 401) {
      document.cookie = `${dashboardInfo.tokenName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
    return { status, resStatus, resMsg };
  } catch (error) {
    if (error.response) {
      return { status: error.response.status || 500, resStatus: false, resMsg: error.response.data.resMsg || 'Server error occurred.' };
    } else if (error.request) {
      return { status: 503, resStatus: false, resMsg: 'Server is offline. Please try again later.' };
    } else {
      return { status: 500, resStatus: false, resMsg: 'An error occurred. Please try again later.' };
    }
  }
}

  const api = Object.fromEntries(apiFunctions.map(({ name, endpoint, method, args }) => {
    return [name, async function (...data) {
      const requestData = args.reduce((acc, key, index) => {
        acc[key] = data[index];
        return acc;
      }, {});
      if (dashboardInfo.webStatus === "Development") {
        return localCallAPI(endpoint, method, requestData);
      }
      else {
        return callAPI(endpoint, method, requestData);
      }
    }];
}));

export { api };